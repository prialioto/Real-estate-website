import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back name="Contattaci" title="Saremo felici di aiutarti" cover={img} />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Oggetto" />
            <textarea cols="30" rows="10"></textarea>
            <button>Invia Richiesta</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
