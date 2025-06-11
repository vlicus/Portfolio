import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import { TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ paddingBottom: "10px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
    </Row>
  );
}

export default Techstack;
