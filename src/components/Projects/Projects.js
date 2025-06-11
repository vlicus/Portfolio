import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alquiler_seguro from "../../Assets/Projects/Alquiler_Seguro_Laptop.png";
import VR_tour from "../../Assets/Projects/VR_tour_Laptop.png";
import pokefinder from "../../Assets/Projects/Pokefinder_Laptop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokefinder}
              title="Pokefinder"
              description="A mini web app built using JavaScript that enables users to search and view detailed Pokémon data and images. The app loads the full Pokémon list from the PokéAPI and uses Array.filter to implement search functionality. It displays comprehensive profiles with stats (HP, attack, defense, speed, etc.) and front/back images. Data is handled in JSON format, with careful management of asynchronous API calls to deliver a smooth user experience."
              ghLink="https://github.com/vlicus/proyecto_colaborativo"
              demoLink="https://vlicus.github.io/proyecto_colaborativo/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VR_tour}
              title="LSBU VR Tour"
              description="The London South Bank University VR Tour is a web-based Virtual Reality application that enables users to explore various LSBU campus facilities through immersive 360° video scenes using a WebXR-compatible headset and controllers. Built with A-Frame and JavaScript, the app features intuitive navigation including head movement, controller interactions, and teleportation between locations such as the Faraday Wing, Borough Road, Perry Library, Keyworth Centre, and a video tour of the Student Life Centre. Served locally via a Python backend, the platform offers an engaging and interactive way to experience the campus remotely using modern VR technology."
              ghLink="https://github.com/vlicus/LSBU-AR-VR-TOUR"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alquiler_seguro}
              title="Secure Rent"
              description="Alquiler Seguro is a full-featured web platform designed to connect property owners with trustworthy tenants through a rental history–based trust system. It offers secure user authentication, detailed property listings, streamlined rental request management, and a mutual rating system to build confidence between landlords and tenants. The platform includes an admin panel for management and features a responsive design for smooth use on mobile devices. Built with a Node.js and Express backend paired with a React frontend, it leverages technologies like MySQL, JWT, bcryptjs, and various React libraries for a robust, user-friendly experience."
              ghLink="https://github.com/vlicus/PFB"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
