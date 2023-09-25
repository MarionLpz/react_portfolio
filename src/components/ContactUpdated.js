import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
// import "../App.css;

export const ContactUpdated = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Envoyer");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    console.log(formDetails, category, value);

    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("En cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Envoyé avec succès !" });
      } else {
        setStatus({ success: false, message: "Erreur, essayez à nouveau" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Erreur, essayez à nouveau" });
    } finally {
      setButtonText("Envoyé !");
    }
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

            <form className="form-inner" onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Prénom"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Nom"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Téléphone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>

                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                  {status.message && (
                    <div className="row">
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </div>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
