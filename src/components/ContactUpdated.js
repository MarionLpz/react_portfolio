import React from "react";
import { useState } from "react";
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
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("En cours...");
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();
    setButtonText("Envoyé !");
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: "Envoyé avec succès !" });
    } else {
      setStatus({ success: false, message: "Erreur, essayez à nouveau" });
    }
  };

  return (
    <div className="form-container">
      <h1>Contactez-moi ! 💌</h1>
      <form className="form-inner" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="First Name"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />
          <input
            type="text"
            value={formDetails.lastName}
            placeholder="Last Name"
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
          />
        </div>
        <div className="row">
          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Phone No."
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
        </div>
        <div className="row">
          <textarea
            rows="6"
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
        </div>
        <button type="submit">{buttonText}</button>
        {status.message && (
          <div className="row">
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
