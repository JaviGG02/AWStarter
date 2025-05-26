# CodeStar connection to GitHub
resource "aws_codestarconnections_connection" "github" {
  name          = "${var.project_name}-github-connection"
  provider_type = "GitHub"
  
  tags = var.tags
}

# Note: After applying this Terraform code, you need to manually complete the GitHub connection setup
# in the AWS Console by navigating to Developer Tools > Settings > Connections
# and clicking on the "Pending" connection to authorize it with your GitHub account.