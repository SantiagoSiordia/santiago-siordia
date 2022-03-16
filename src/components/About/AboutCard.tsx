import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Santiago Siordia </span>
            from <span className="purple"> Guadalajara, Jalisco, México.</span>
            <br />I am a Senior JavaScript Software Engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">🎮 Playing Games</li>
            <li className="about-activity">💻 Writting Tech Blogs</li>
            <li className="about-activity">🎥 Creating YouTube videos</li>
            <li className="about-activity">📚 Learning new things</li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Santiago</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
