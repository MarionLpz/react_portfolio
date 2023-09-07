//composant contact -> email-js
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import emailjs from "emailjs-com";

export const Contact2 = () => {
  //Accès au formulaire pour collecter les données
  const form = useRef();
  //à la soumission du formulaire  -> requete post à l'API
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Statut d'envoi : " + result.text);
        },
        (error) => {
          alert("Statut d'envoi : " + error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contactez-moi" />
          </Col>
          <Col md={6}>
            <h2>Contactez-moi ! 💌</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name="name" placeholder="Nom" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name="email" placeholder="Email" />
                </Col>
                <Col className="px-1">
                  <textarea rows="6" name="message" placeholder="Message" />
                  <button type="submit">
                    <span>Envoyer</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
