import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thabang Mashinini-Sekgoto </span>
            from <span className="purple"> Johannesburg, South Africa.</span>
            <br />I am a computer science students from the University of the Witwatersrand. I am just a super curious guy. 
            I spend a lot of time building and learning about software and how to sell them, but there’s also a lot more to it.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Calisthenics 
            </li>
            <li className="about-activity">
              <ImPointRight /> 100/400 Meter Competative Sprinting 
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Creation through Photography & Cinematography
            </li>
            <li className="about-activity">
              <ImPointRight /> Music Production and Disc Jockey
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One step at a time..."{" "}
          </p>
          <footer className="blockquote-footer">Thabang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
