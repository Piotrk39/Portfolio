import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import DevelopmentDocs from "../../Assets/Projects/Development Docs.png";
import Keeper from "../../Assets/Projects/Keeper.png";
import F2P from "../../Assets/Projects/Favorite 2 Playlist.png";
import Cypress2 from "../../Assets/Projects/Sample Cypress UI Automation 2.0.png";
import Cypress from "../../Assets/Projects/Sample Cypress UI Automation.png";
import Etisalat from "../../Assets/Projects/Etisalat API Automation Suite.png";
import SOF from "../../Assets/Projects/Etisalat API Automation Suite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
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
              imgPath={DevelopmentDocs}
              isBlog={false}
              title="Development Docs"
              description="Personal web page documentig my progress during JavaScript course designed by AppBrewery that I participated for the sole reason of growing my programming skills. Page is designed with Node.js, EJS and Google Oauth 2.0"
              ghLink="https://github.com/Piotrk39/daily-blog"
              demoLink="https://mysterious-brushlands-82597.herokuapp.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Keeper}
              isBlog={false}
              title="Keeper"
              description="Note taking application Developed using MERN tech stack with React.js on the front and Node.js on the back. App uses variety of REST APIs that perform CRUD functions in the APP. Feel free to check it out and leave your feedback."
              ghLink="https://github.com/Piotrk39/Keepr_APP"
              demoLink="https://piotr-krajewski-keeper-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={F2P}
              isBlog={false}
              title="Favorite 2 Playlist"
              description="My flagship project that solely pushed me to learn JavaScript. This application is based on Spotify's API and allows user to create sharable playlist from his liked songs. Since the status of the project is still 'Under-Develpment' please contact me or copy Repository for testing."
              ghLink="https://github.com/Piotrk39/Spotify-Sharable-Liked-Playlist"
              demoLink="https://cozy-kangaroo-1ffee6.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cypress}
              isBlog={false}
              title="Cypress test Suite 1.0"
              description="Cypress automation test suite that tests user's repository based on his access token and performs basic checks of the Repo."
              ghLink="https://github.com/Piotrk39/cypress-github-test"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cypress2}
              isBlog={false}
              title="Cypress test Suite 2.0"
              description="Cypress automation test suite designed for the need of assesment. It tests the uploadble form with the use of Fixtrures and predefined data. All together Repository includes small example of the test plan, test cases and documentation. All designed by me. Feel free to check it out."
              ghLink="https://github.com/Piotrk39/silver-octo-couscous"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Etisalat}
              isBlog={false}
              title="Etisalat API project"
              description="Automated API test suite including almost 80 REST API calls structured and designed for kepping the workflow of the application in order and to test web-services during regression testing. Since this was my professional project and I sepcialise in API tests we can discuss about my services during online meeting."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SOF}
              isBlog={false}
              title="SOF Contract Workflow Automation"
              description="As API testing is my core skill here I also combined REST API undocumented endpoints and used them to automate the flow of the contract worflow. By doing that I have reduced the testing process from 5hours to 1minute with the overall time investement of 16 hours."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
