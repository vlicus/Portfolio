import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I found my way into programming after years in hospitality — and I’m still learning
              and building every day! 🤓
              <br />
              <br />
              I’m comfortable working with the essentials like{" "}
              <b className="purple">JavaScript, React, Node.js, and SQL</b>, and I’m especially
              passionate about <b className="purple">frontend development</b> — creating intuitive,
              functional, and visually consistent web applications.
              <br />
              <br />
              Lately, I’ve been exploring modern tools like{" "}
              <b className="purple">Next.js, NestJS, and MongoDB</b> while applying best practices
              such as <b className="purple">Git branching strategies</b> and the{" "}
              <b className="purple">SOLID</b> principles to write clean, scalable, and maintainable
              code.
              <br />
              <br />
              This quick intro gives a snapshot of my journey — the longer version works great for
              the{" "}
              <NavLink to="/about" className="purple" style={{ textDecoration: "none" }}>
                <b>About</b>
              </NavLink>{" "}
              section.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ backgroundColor: "", borderRadius: "50%" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vlicus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/samuel-cobas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vlicus93/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
