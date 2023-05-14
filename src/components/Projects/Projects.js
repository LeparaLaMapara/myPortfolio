import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import tfilters from "../../Assets/Projects/tfilters-logo.jpeg";
import covid from "../../Assets/Projects/covid.jpg";
import recommender from "../../Assets/Projects/course-recomender.PNG";
import pairs from "../../Assets/Projects/IBM-pairs.png";
import mn from "../../Assets/Projects/municipal-money.png";
import kasilam from "../../Assets/Projects/kasilam.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tfilters}
              isBlog={false}
              title="TfilterPy"
              description="My Python package for implemeting Bayesian Filtering Methods. The tfilterspy package is a Python library for implementing Bayesian filter algorithms, widely used mathematical tools in estimation theory and control engineering"
              ghLink="https://github.com/LeparaLaMapara/tfilterpy"
              demoLink="https://pypi.org/project/tfilterpy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasilam}
              isBlog={false}
              title="Kasi'Lam Projects"
              description="This a movement that I started with my younger brother that focuses on branding, webdesign and photography for township businesses. The aim is to helped township business go online using free hosting platforms."
              ghLink="https://github.com/LeparaLaMapara/KasiLam"
              demoLink="https://github.com/Kasilam-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommender}
              isBlog={false}
              title="Wits Course Recommendation System"
              description="Implemented and deployed a course recommnedation system using K-modes clustering to recommend new 1st year students course combinations that maximise completing 1st succefully. The model achieved a Silhouette score of 80% and was deployed as PowerBI dashboard. The system was used by the faculty of humanities at the University of the Witwatersrand for the  general bachelor of arts degree. [PRIVATE REPO]"
              ghLink="https://github.com/LeparaLaMapara/Wits-Recommendation-System"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Visualization Tool"
              description=" Web-based dashboard for monitoring and visualizing COVID-19 cases in the Gauteng province of South Africa. The dashboard presents various charts and maps that show the number of confirmed cases, deaths, and recoveries by district, as well as trends over time. Additionally, the dashboard features a hotspot identification tool, which highlights areas with high incidence rates and clusters of cases. Users can filter and drill down into the data by various demographic and geographic factors, such as age group and municipality. The dashboard is/was intended to help public health officials and other stakeholders track the spread of COVID-19 and make informed decisions about resource allocation and intervention strategies."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://coviz-frontend.ba8fxxmw695.us-south.codeengine.appdomain.cloud/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pairs}
              isBlog={false}
              title="IBM Environmental Intelligence Suite"
              description="I designed and deployed a deep learning framework using TensorFlow 2.0 that includes advanced models like 2D-CNN, UNET, PCA-LSTM, and 3D-CNN for accurate seasonal forecasting. My work has been integrated into IBM's Environmental Intelligence Suite, which focuses on optimizing food and manufacturing supply chains, climate impact modeling, and global risk evaluation of food and other commodities. This solution demonstrates my technical proficiency in developing and implementing advanced deep learning models and its significant impact on solving real-world challenges in supply chain management, climate change, and global risk assessment."
              ghLink="https://github.com/LeparaLaMapara/sarl-climate"
              demoLink="https://www.ibm.com/products/environmental-intelligence-suite/geospatial-analytics" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mn}
              isBlog={false}
              title="Municipal Money and Youth Explorer"
              description="Implemented a AI system that assist South African Municipalities improve their service delivary and effieicncy by profiling them using SVM with a accuracy of 75%. Used PCA to identify factors that cause youth unemployment and predict youth unemployemnt rate using random forest with accuracy of 70%. The dashbaord  used a Django backend, Postgresql database, CSS/HTML front-end. This solution was developed for the municipality of Cape Town"
              ghLink="https://github.com/LeparaLaMapara/DSIDE"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
