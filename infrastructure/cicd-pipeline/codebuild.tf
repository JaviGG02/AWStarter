# CodeBuild project for building Docker images
resource "aws_codebuild_project" "build" {
  name          = "${var.project_name}-build"
  description   = "Build Docker image and push to ECR"
  service_role  = aws_iam_role.codebuild_role.arn
  build_timeout = 10

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    type                        = "LINUX_CONTAINER"
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:3.0"
    privileged_mode             = true # Required for Docker commands

    environment_variable {
      name  = "AWS_DEFAULT_REGION"
      value = var.region
    }

    environment_variable {
      name  = "REPO_NAME"
      value = var.repository_name
    }

    environment_variable {
      name  = "ECR_REPOSITORY_URI"
      value = aws_ecr_repository.app_repo.repository_url
    }
  }

  source {
    type      = "CODEPIPELINE"
    buildspec = <<-EOF
      version: 0.2
      phases:
        pre_build:
          commands:
            - echo Logging in to Amazon ECR...
            - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $ECR_REPOSITORY_URI
            - COMMIT_HASH=$(echo $CODEBUILD_RESOLVED_SOURCE_VERSION | cut -c 1-7)
            - IMAGE_TAG=$${COMMIT_HASH:=latest}
        build:
          commands:
            - echo Building the Docker image...
            - docker build -t $REPO_NAME .
            - docker tag $REPO_NAME:latest $ECR_REPOSITORY_URI:latest
        post_build:
          commands:
            - echo Pushing the Docker image...
            - docker push $ECR_REPOSITORY_URI:latest
            - echo Writing image definitions file...
            - echo "{\"ImageURI\":\"$ECR_REPOSITORY_URI:latest\"}" > imageDefinitions.json
      artifacts:
        files:
          - imageDefinitions.json
          - appspec.yml
          - taskdef.json
    EOF
  }

  logs_config {
    cloudwatch_logs {
      group_name  = "/aws/codebuild/${var.project_name}-build"
      stream_name = "build-log"
    }
  }

  tags = var.tags
}