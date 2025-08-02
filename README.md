# hands-on-projects-website
# Hands-On Projects Website

This repository contains the source code for a static website, deployed to Amazon S3 and served through Amazon CloudFront. The project demonstrates a modern Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions to automate the deployment process.

---

### 🚀 Project Overview

The goal of this project is to showcase a full-stack deployment pipeline for a simple static website. The key components include:

* **Static Website:** The website's static files (HTML, CSS, JavaScript) are hosted directly in this repository.
* **GitHub Actions:** An automated workflow is configured to trigger on every push to the `main` branch. This workflow handles the entire deployment process.
* **Amazon S3:** The static website files are stored in an S3 bucket configured for public website hosting.
* **Amazon CloudFront:** A CloudFront distribution is used to serve the content from the S3 bucket globally, providing a fast and secure user experience. It also serves as the public-facing URL for the website.

---

### ⚙️ CI/CD Pipeline

The CI/CD pipeline is orchestrated by a GitHub Actions workflow defined in `.github/workflows/deploy-resume.yml`. The pipeline performs the following steps automatically:

1.  **Checkout Code:** The workflow checks out the latest code from the repository.
2.  **Upload to S3:** It synchronizes the project's static files with the designated S3 bucket.
3.  **Invalidate CloudFront Cache:** After the files are updated in S3, the workflow invalidates the CloudFront cache to ensure that users are served the latest version of the website.

This automated process ensures that any new changes pushed to the `main` branch are live within minutes, without any manual intervention.

---

### 🔧 Technologies Used

* **AWS S3:** For static website hosting.
* **AWS CloudFront:** For content delivery and SSL.
* **GitHub Actions:** For CI/CD automation.

---

### 🔒 Security and Best Practices

* **IAM User:** A dedicated IAM user with the principle of least privilege is used for the GitHub Actions workflow. This user has restricted permissions to only upload to the S3 bucket and invalidate the CloudFront distribution.
* **GitHub Secrets:** Sensitive AWS credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`) and the CloudFront Distribution ID are stored securely as GitHub Secrets, ensuring they are not exposed in the codebase.

---

### 📂 Repository Structure

The project has a straightforward structure:
