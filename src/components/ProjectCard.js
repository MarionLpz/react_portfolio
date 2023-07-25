import { Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const ProjectCard = ({ title, description, stack, lienGit, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="img-project" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>
            <p style={{ fontSize: "small" }}>{stack}</p>
            <a href={lienGit} alt="Lien github">
              <img className="icon-skill" src={navIcon3} />
            </a>
          </span>
        </div>
      </div>
    </Col>
  );
};
