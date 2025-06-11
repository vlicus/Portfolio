import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ position: "relative" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", paddingBottom: "25px" }}>
          {props.description}
        </Card.Text>
        {!props.demoLink ? (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ position: "absolute", bottom: 0, right: "40%" }}
          >
            <BsGithub style={{ marginBottom: "5px" }} /> Github
          </Button>
        ) : (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ position: "absolute", bottom: 0, right: "51%" }}
          >
            <BsGithub style={{ marginBottom: "5px" }} /> Github
          </Button>
        )}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ position: "absolute", bottom: 0, left: "51%", marginTop: "1rem" }}
          >
            <CgWebsite style={{ marginBottom: "5px" }} /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
