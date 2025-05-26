# AWS CI/CD Pipeline Infrastructure

This Terraform configuration sets up a complete CI/CD pipeline using AWS CodePipeline that automatically builds and pushes Docker images to Amazon ECR whenever changes are pushed to any branch in the GitHub repository.

## Architecture

The infrastructure includes:

1. **Amazon ECR Repository**: Stores Docker images built from the Dockerfile
2. **AWS CodePipeline**: Orchestrates the CI/CD workflow
3. **AWS CodeBuild**: Builds the Docker image and pushes it to ECR
4. **AWS CodeStar Connection**: Connects to GitHub for source code integration
5. **S3 Bucket**: Stores pipeline artifacts
6. **IAM Roles and Policies**: Provides necessary permissions

## Prerequisites

- AWS CLI configured with appropriate credentials
- Terraform installed
- GitHub repository with your application code and Dockerfile

## Usage

1. Initialize Terraform:
   ```
   terraform init
   ```

2. Review the execution plan:
   ```
   terraform plan
   ```

3. Apply the configuration:
   ```
   terraform apply
   ```

4. After applying, you need to manually complete the GitHub connection setup in the AWS Console:
   - Navigate to Developer Tools > Settings > Connections
   - Click on the "Pending" connection
   - Follow the prompts to authorize with your GitHub account

## Customization

You can customize the deployment by modifying the variables in `variables.tf`:

- `region`: AWS region to deploy resources
- `project_name`: Name prefix for all resources
- `repository_name`: Name of the ECR repository
- `github_repo`: GitHub repository path (owner/repo)
- `github_branch`: GitHub branch to monitor (default: "*" for all branches)
- `tags`: Tags to apply to resources

## Adding More Deployment Stages

To add additional deployment stages to the pipeline:

1. Uncomment the "Deploy" stage in `main.tf`
2. Configure the deployment provider and settings based on your target environment (ECS, EKS, Elastic Beanstalk, etc.)
3. Add any necessary IAM permissions in `iam.tf`
4. Create additional resources as needed for your deployment target

Example for adding an ECS deployment stage:

```hcl
stage {
  name = "Deploy"

  action {
    name            = "Deploy"
    category        = "Deploy"
    owner           = "AWS"
    provider        = "ECS"
    input_artifacts = ["build_output"]
    version         = "1"

    configuration = {
      ClusterName = aws_ecs_cluster.app_cluster.name
      ServiceName = aws_ecs_service.app_service.name
      FileName    = "imageDefinitions.json"
    }
  }
}
```

## Multiple Environments

For multiple environments (dev, staging, prod), you can:

1. Create separate Terraform workspaces:
   ```
   terraform workspace new dev
   terraform workspace new staging
   terraform workspace new prod
   ```

2. Use workspace-specific variables:
   ```hcl
   locals {
     env = terraform.workspace
     env_vars = {
       dev = {
         instance_type = "t3.small"
       }
       staging = {
         instance_type = "t3.medium"
       }
       prod = {
         instance_type = "t3.large"
       }
     }
   }
   ```

3. Apply the configuration for each workspace:
   ```
   terraform workspace select dev
   terraform apply -var-file=dev.tfvars
   ```