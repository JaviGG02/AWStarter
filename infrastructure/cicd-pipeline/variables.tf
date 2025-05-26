variable "region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "eu-west-1"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "cloudstart"
}

variable "repository_name" {
  description = "Name of the ECR repository"
  type        = string
  default     = "cloudstart-repo"
}

variable "github_repo" {
  description = "GitHub repository path (owner/repo)"
  type        = string
  default     = "JaviGG02/AWStarter"
}

variable "github_branch" {
  description = "GitHub branch to monitor"
  type        = string
  default     = "frontend" # Use your actual default branch name (main, master, etc.)
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default = {
    Environment = "dev"
    Project     = "cloudstart"
    Terraform   = "true"
  }
}