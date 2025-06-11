import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <b className="purple" style={{ borderStyle: "dotted" }}>
              Hey!
            </b>
            {"  "}I am Samu - a former bar manager turned web developer with a background in Tech
            and a love for building things that work well and make sense.
            <br />
            <br />I first got into tech back in 2013, starting a Network Administrator course. Life
            took me in a different direction - I moved to London, worked in hospitality for several
            years, and eventually ran a busy bar.
            <br />
            <br /> Somewhere along the way, I realized I still wanted to follow that tech path. So,
            while managing a full-time job, I also studied{" "}
            <b className="purple">Computer Science </b> full-time - and that mix of discipline,
            curiosity, and problem-solving is something I have carried into everything I do.
            <br />
            <br /> More recently, I completed a full-stack web development bootcamp, where I worked
            with <b className="purple">JavaScript, Node.js, React, Express, and MySQL</b>. I have
            realized that backend development is where I feel most at home - I love building the
            logic and structure behind the scenes.
            <br />
            <br /> Right now, I am focused on growing as a developer, building cool stuff, and
            expanding my skills by learning new stacks like{" "}
            <b className="purple">Next.js, NestJS</b>, and non-relational databases such as{" "}
            <b className="purple">MongoDB</b>. I am also actively looking for my first opportunity
            in tech. Thanks for stopping by - feel free to check out my projects!
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coming together is a beginning; keeping together is progress; working together is
            success."{" "}
          </p>
          <footer className="blockquote-footer">Henry Ford </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
