# S3 bucket for storing pipeline artifacts
resource "aws_s3_bucket" "artifact_bucket" {
  bucket = "${var.project_name}-artifacts-${random_string.suffix.result}"
  
  tags = var.tags
}

# Generate random suffix for S3 bucket name to ensure uniqueness
resource "random_string" "suffix" {
  length  = 8
  special = false
  upper   = false
}

# Block public access to the S3 bucket
resource "aws_s3_bucket_public_access_block" "artifact_bucket_access" {
  bucket = aws_s3_bucket.artifact_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Enable versioning for the S3 bucket
resource "aws_s3_bucket_versioning" "artifact_bucket_versioning" {
  bucket = aws_s3_bucket.artifact_bucket.id
  
  versioning_configuration {
    status = "Enabled"
  }
}