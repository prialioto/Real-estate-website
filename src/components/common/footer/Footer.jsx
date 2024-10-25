import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Hai delle domande ?</h1>
              <p>Ti aiuteremo a trovare la casa giusta per te</p>
            </div>
            <button className="btn5">Contattaci oggi stesso</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Ti serve aiuto?</h2>
              <p>
                Ricevi aggiornamenti, offerte speciali, tutorial, sconti inviati
                direttamente nella tua casella di posta ogni mese.
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email" />
                <button>Iscriviti</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>Priscilla 2024</span>
      </div>
    </>
  );
};

export default Footer;
