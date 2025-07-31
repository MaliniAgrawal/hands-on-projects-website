// Define your CloudFront base URL here
const baseURL = "https://d2j322d01bxiyd.cloudfront.net";

const projectData = {
    mcpCliGenerator: {
    title: "AWS CLI Generator with Natural Language (MCP)",
    description: "Turn natural language into AWS CLI commands using a Flask server and Mangum adapter. Built with Docker and ready for serverless deployment.",
    github: "https://github.com/MaliniAgrawal/aws-cli-generator-mcp"
    },
        shelfLining: {
        title: "Shelf Lining Calculator",
        description: "Developed a serverless web application using API Gateway and AWS Lambda to calculate shelf lining needs.  The front-end is hosted on S3, providing dynamic results based on user input.",
        website: "http://balti4db.s3-website-us-west-1.amazonaws.com",
        github: "https://github.com/MaliniAgrawal/shelf-lining.git"
    },
    thumbnailCreation: {
        title: "Thumbnail Creation Service",
        description: "Created an AWS Lambda function that generates image thumbnails.  Users can then download these thumbnails locally.",
        github: "https://github.com/MaliniAgrawal/thumnail.git"
    },
    ciCdPipeline: {
        title: "Serverless API CI/CD Pipeline",
        description: "Implemented a fully automated CI/CD pipeline for a serverless API, streamlining the development and deployment process.",
        github: "https://github.com/MaliniAgrawal/AWSCICD.git"
    },
    generativeAI: {
        title: "Building Generative AI Application Using Amazon Bedrock",
        description: "This project showcases the integration of Amazon Bedrock for generative AI tasks.  It demonstrates how to use Large Language Models (LLMs) available through Bedrock for: generating email responses, answering questions, generating code, and leveraging Langchain agents for more complex workflows. The project was developed as part of an AWS Skill Builder project using SageMaker Studio Lab",
        github: "https://github.com/MaliniAgrawal/Bedrock-skillbuilder.git"
    },
    imageCombinerWebsite: {
        title: "Image-Combiner-Website",
        description: "Built a web-based image combiner tool.  The application uses AWS Lambda for image processing logic and API Gateway to expose the API. Users can download the combined image locally, suitable for profile pictures on platforms like WhatsApp..",
        website: "http://image-combiner.s3-website-us-west-1.amazonaws.com",
        github: "https://github.com/MaliniAgrawal/image-combiner-website.git"
    },
    ServerlessTroubleshootingDashboard: {
      title: "Serverless-Troubleshooting",
      description: "An automated, cost-efficient (~$0.0011/month) AWS monitoring solution using Lambda and EventBridge. Detects Lambda timeouts and S3 latency, logs issues to DynamoDB, and presents them on an S3-hosted dashboard with Pacific Time display and dynamic styling. ",
      website: "http://userdata-webserver.s3-website-us-west-1.amazonaws.com",
      github: "https://github.com/MaliniAgrawal/aws-troubleshooting-dashboard.git"

    }

};

function showDescription(projectId) {
    const project = projectData[projectId];
    const descriptionContainer = document.getElementById('projectDescription');
    descriptionContainer.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.website ? `<a href="${project.website}" target="_blank">Live Demo</a>` : ""}
        <a href="${project.github}" target="_blank">GitHub Repository</a>
    `;
    descriptionContainer.style.display = 'block';
}