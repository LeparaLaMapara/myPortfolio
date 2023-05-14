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

import photographygallery from "../../Assets/Projects/photography-website-v1.png";
import photographyportfolio from "../../Assets/Projects/photography-website-v2.png";

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
              description="The tfilterspy package is a powerful Python library I designed for implementing Bayesian filter algorithms, which are widely used mathematical tools in estimation theory and control engineering. This package showcases my strong technical skills in both software development and mathematical modeling, as well as my ability to apply these skills in the field of applied science. With tfilterspy, users can easily and efficiently apply Bayesian filtering methods to a variety of real-world applications, from tracking moving objects to forecasting future events. My deep understanding of Bayesian statistics and filtering methods is reflected in the design and functionality of the package, making it a reliable and effective tool for professionals in the field."
              ghLink="https://github.com/LeparaLaMapara/tfilterpy"
              demoLink="https://pypi.org/project/tfilterpy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photographygallery}
              isBlog={false}
              title="My Photography Gallery"
              description="In this project, I leveraged my technical skills in web development to create a visually appealing photography gallery using React JS. By utilizing React's powerful components and efficient rendering, I was able to seamlessly organize and display my photography portfolio. This allowed me to showcase my skills not only in photography but also in web development and UI design."
              ghLink="https://github.com/thabanglukhetho/Photography"
              demoLink="https://thabanglukhetho.github.io/Photography/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photographyportfolio}
              isBlog={false}
              title="My Photography Portfolio"
              description="As a self-learning web developer and photographer, I designed and developed my own photography portfolio using HTML, CSS, and JavaScript. I showcased my technical skills in web development by implementing responsive design, creating a user-friendly interface, and integrating dynamic features such as lightbox image viewing. Additionally, my photography skills were demonstrated through the selection and organization of high-quality images and the use of thoughtful captions and descriptions."
              ghLink="https://github.com/realthabanglukhetho/photography"
              demoLink="https://realthabanglukhetho.github.io/photography/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasilam}
              isBlog={false}
              title="Kasi'Lam Projects"
              description="As an entrepreneur and advocate for supporting local businesses, I co-founded this movement with my younger brother to provide branding, web design, and photography services to township businesses. Our goal is to assist these businesses in establishing an online presence by utilizing free hosting platforms. Through this initiative, I have developed my skills in web design, branding, and photography, while also contributing to the growth and success of small businesses within our community."
              ghLink="https://github.com/LeparaLaMapara/KasiLam"
              // demoLink="https://github.com/Kasilam-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommender}
              isBlog={false}
              title="Wits Course Recommendation System"
              description="In this project, I utilized my expertise in machine learning and data analysis to develop a course recommendation system for the faculty of humanities at the University of the Witwatersrand. Using K-modes clustering, I designed an algorithm that recommends course combinations for new first-year students to maximize their chances of completing their first year successfully. With a high Silhouette score of 80%, the model was deployed as a PowerBI dashboard, making it easy for faculty members to access and use. This project demonstrated my ability to develop and deploy a machine learning solution that meets the specific needs of an organization and enhances their decision-making process."
              ghLink="https://github.com/LeparaLaMapara/Wits-Recommendation-System"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Visualization Tool"
              description="As an intern at the IBM Research Lab, I co-developed a web-based dashboard to monitor and visualize COVID-19 cases in the Gauteng province of South Africa. The dashboard utilized various data visualization techniques, such as charts and maps, to display the number of confirmed cases, deaths, and recoveries by district, as well as trends over time. To ensure maximum usability, the dashboard also included a hotspot identification tool, which highlighted areas with high incidence rates and clusters of cases. Additionally, I implemented a filtering and drill-down feature that allowed users to filter the data by demographic and geographic factors such as age group and municipality. Overall, the dashboard was designed to help public health officials and other stakeholders track the spread of COVID-19 and make informed decisions about resource allocation and intervention strategies"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://coviz-frontend.ba8fxxmw695.us-south.codeengine.appdomain.cloud/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pairs}
              isBlog={false}
              title="IBM Environmental Intelligence Suite"
              description="During my internship at IBM Research Lab, I designed and deployed a deep learning model using TensorFlow 2.0 that includes advanced models like 2D-CNN, UNET, PCA-LSTM, and 3D-CNN for accurate seasonal forecasting. My work has been integrated into IBM's Environmental Intelligence Suite, which focuses on optimizing food and manufacturing supply chains, climate impact modeling, and global risk evaluation of food and other commodities. By implementing this solution, we were able to achieve a significant reduction in forecasting errors, leading to a more efficient supply chain management and better risk assessment. This highlights my technical proficiency and expertise in developing advanced deep learning models and my ability to make a positive impact on real-world challenges in supply chain management, climate change, and global risk assessment."
              demoLink="https://www.ibm.com/products/environmental-intelligence-suite/geospatial-analytics" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mn}
              isBlog={false}
              title="Municipal Money and Youth Explorer"
              description="During my 3-month internship at CSIR, I implemented an AI system that assisted South African municipalities in improving their service delivery and efficiency. By profiling municipalities using SVM with an accuracy of 75%, I was able to identify areas for improvement and optimization. Additionally, I used PCA to identify factors that cause youth unemployment and predicted the youth unemployment rate using random forest with an accuracy of 70%. The dashboard was developed using a Django backend, Postgresql database, and CSS/HTML front-end. This solution was developed specifically for the municipality of Cape Town, and my work had a positive impact on the local community by helping to improve government services and address unemployment."
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
