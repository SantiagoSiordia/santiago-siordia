import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";

export interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  link: string;
  isBlog?: boolean;
}

const ProjectCards: FC<ProjectCardProps> = ({
  imgPath,
  title,
  description,
  link,
  isBlog = false,
}) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
