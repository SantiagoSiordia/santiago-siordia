import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import boattrader from "../../Assets/Projects/boattrader.png";
import cerby from "../../Assets/Projects/cerby.png";
import cyberpuerta from "../../Assets/Projects/cyberpuerta.png";
import { Particle } from "../Particle";
import ProjectCard from "./ProjectCards";

export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cerby}
              title="Cerby"
              description="Cerby is a tool that allows you to share passwords among members of your company in a super secure way."
              link="https://play.google.com/store/apps/details?id=com.cerby&hl=en&gl=US"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyberpuerta}
              title="Cyberpuerta"
              description="Cyberpuerta is the fastest growing technology e-commerce in Mexico. Alongside another great developer, I started developing their mobile app. Some other cool devs joined us in our way there. It's currently only available in the Google PlayStore"
              link="https://play.google.com/store/apps/details?id=com.cyberpuerta"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boattrader}
              title="Boat trader"
              description="As a member of the Mobile Team 'Aistream'. I developed features in three different Mobile Apps: Annonces du Bateau, Boattrader and Yachtworld."
              link="https://play.google.com/store/apps/details?id=com.boatsgroup.boattrader&hl=en&gl=US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
