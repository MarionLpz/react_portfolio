import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Problem Solver", "Cat Lover"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  //gère la rotation du texte
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText == "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    {`Hi! I'm Marion `}
                    <br></br>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Problem solver", "Cat Lover"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    <b>A la recherche d'une alternance ! 🤝 </b>
                  </p>
                  <p style={{ fontSize: "smaller" }}>
                    📅 Quand ? A partir d'octobre 2023
                  </p>
                  <p style={{ fontSize: "smaller" }}>⏱️ Durée : 12 mois</p>
                  <p style={{ fontSize: "smaller" }}>
                    💃 Rythme ? 4 jours en entreprise (du lundi au jeudi) / 1
                    jour à l'école
                  </p>
                  <p style={{ fontSize: "smaller" }}>
                    🎓 Diplôme : Concepteur développeur d’application, RNCP
                    niveau 6
                  </p>
                  <div>
                    <a href="/doc/cvml.pdf" download="CV-MarionLopez-dev.pdf">
                      {" "}
                      <button>
                        Télécharger mon CV <ArrowRightCircle size={25} />
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
