// Define your CloudFront base URL here
const baseURL = "https://d2j322d01bxiyd.cloudfront.net";

const projectData = {
    mcpCliGenerator: {
    title: "AWS CLI-NLP Assistant (MCP)",
    architecture: "User → Claude Desktop → MCP Server → AWS CLI Command",
    description: "Natural-language AWS CLI assistant that generates structured commands with confirmation gates and safety-first design.",
    github: "https://github.com/MaliniAgrawal/aws-cli-assistant-lite.git",
    pypi: "https://pypi.org/project/aws-cli-assistant-lite/"
    },
        shelfLining: {
        title: "Shelf Lining Calculator",
        architecture: "S3 Static Website → Browser-based Calculation",
        description: "Practical calculator for shelf lining and cutting plans, built as a simple browser-based utility.",
        website: "http://balti4db.s3-website-us-west-1.amazonaws.com",
        github: "https://github.com/MaliniAgrawal/shelf-lining.git"
    },
    thumbnailCreation: {
        title: "Thumbnail Creation Service",
        architecture: "S3 Upload → Lambda Processing → S3 Thumbnail Output",
        description: "Serverless image-processing workflow that creates thumbnails automatically from uploaded images.",
        github: "https://github.com/MaliniAgrawal/thumnail.git"
    },
    ciCdPipeline: {
        title: "Serverless API CI/CD Pipeline",
        architecture: "GitHub Actions → Build → Test → Deploy Workflow",
        description: "Hands-on pipeline project showing automated build, test, and deployment workflow for serverless applications.",
        github: "https://github.com/MaliniAgrawal/AWSCICD.git"
    },
    generativeAI: {
        title: "Building Generative AI Application Using Amazon Bedrock",
        architecture: "SageMaker Studio Lab → Amazon Bedrock → LangChain",
        description: "This project showcases the integration of Amazon Bedrock for generative AI tasks.  It demonstrates how to use Large Language Models (LLMs) available through Bedrock for: generating email responses, answering questions, generating code, and leveraging Langchain agents for more complex workflows. The project was developed as part of an AWS Skill Builder project using SageMaker Studio Lab",
        github: "https://github.com/MaliniAgrawal/Bedrock-skillbuilder.git"
    },
    imageCombinerWebsite: {
        title: "Image-Combiner-Website",
        architecture: "S3 Static Website → Browser Image Processing → Download",
        description: "Browser-based utility that combines uploaded images and lets users preview and download the result.",
        website: "http://image-combiner.s3-website-us-west-1.amazonaws.com",
        github: "https://github.com/MaliniAgrawal/image-combiner-website.git"
    },
    ServerlessTroubleshootingDashboard: {
      title: "Serverless-Troubleshooting",
      architecture: "EventBridge → Lambda → DynamoDB → S3 Dashboard",
      description: "Serverless dashboard that simulates and displays operational issues to demonstrate AWS troubleshooting and monitoring thinking.",
      website: "http://userdata-webserver.s3-website-us-west-1.amazonaws.com",
      github: "https://github.com/MaliniAgrawal/aws-troubleshooting-dashboard.git"

    }

};

function showDescription(projectId) {
    const project = projectData[projectId];
    const descriptionContainer = document.getElementById('projectDescription');
    descriptionContainer.innerHTML = `
        <h3>${project.title}</h3>
        ${project.architecture ? `<div class="architecture"><strong>Architecture:</strong> ${project.architecture}</div>` : ""}
        <p>${project.description}</p>
        ${project.website ? `<a href="${project.website}" target="_blank">Live Demo</a>` : ""}
        ${project.github ? `<a href="${project.github}" target="_blank">GitHub Repository</a>` : ""}
    `;
    descriptionContainer.style.display = 'block';
}