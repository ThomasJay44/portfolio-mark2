import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

import { Bozz } from "../../Assets/Images";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <Container>
          <Row>
            <h1>Welcome To My Portofolio!</h1>
          </Row>
        </Container>
      </div>
      <div className="content">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <img src={Bozz} alt="Bozz" />
            </Col>
            <Col xs={12} md={8}>
              <p>
                I am a passionate individual who brings together the best of both worlds: a blue-collar work ethic and a tech-driven mindset. Growing up in a family landscaping business, I learned the value of hard work and dedication from an early age. As my grandfather used to say, "We work 7 days a week in this family." This upbringing instilled in me a strong sense of responsibility and a commitment to delivering high-quality work, even in the face of challenges. 

                <br />

                Recently, I completed the Rutgers bootcamp and obtained full-stack certification, equipping me with the technical skills needed to excel in the tech industry. However, what truly sets me apart is my ability to thrive under pressure and learn on the job. I have developed a "learn by doing" approach that allows me to quickly adapt and efficiently overcome obstacles in fast-paced environments.

                <br />

                What excites me the most is the opportunity to merge my blue-collar background with the tech field, championing a new genre of employee that I like to call "blue tech." I believe that by combining the strong work ethic of a blue-collar upbringing with the technical expertise I have gained, I can make a significant impact in the industry.

                <br />

                In addition to my technical skills, I have honed my customer service and interpersonal abilities through my experience in the retail industry. This has enabled me to effectively communicate with customers, understand their needs, and provide exceptional service, even in high-pressure situations.

                <br />

                Overall, I am a dedicated and adaptable individual who is eager to take on new challenges. I am confident in my ability to contribute to an organization's mission and growth by leveraging my unique blend of experience, work ethic, and problem-solving skills.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

