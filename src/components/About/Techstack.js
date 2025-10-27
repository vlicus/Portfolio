import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { TbSql, TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

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
        <GrReactjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVitest />
      </Col>
    </Row>
  );
}

export default Techstack;
