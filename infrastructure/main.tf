# Save to local outputs folder
terraform {
  backend "local" {
    path = "outputs/terraform.tfstate"
  }
}

# infrastructure/main.tf
module "eks_hosting" {
  source = "./eks-hosting"
  # Pass variables as needed
}

module "cicd_pipeline" {
  source = "./cicd-pipeline"
  # Pass variables as needed
  # You can reference outputs from the EKS module
#   eks_cluster_name = module.eks_hosting.cluster_name
}
