import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-container">
        <Row className="align-item-center">
          <Col sm={6}>
            <p>CopyRight 2023. All right reserved.</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/marion-lopez-/"
                target="_blank"
              >
                <img src={navIcon1} alt="Lien Linkedin" />
              </a>
              <a href="https://github.com/MarionLpz" target="_blank">
                <img src={navIcon3} alt="Lien Github" />
              </a>
              <a href="/doc/cvml.pdf" download="CV-MarionLopez-dev.pdf">
                <img src={navIcon4} alt="Télécharger mon CV" />
              </a>
            </div>{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
