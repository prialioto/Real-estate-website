import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Cerca la tua prossima casa "
            subtitle="Trova immobili nuovi e in evidenza nella tua città."
          />

          <form className="flex">
            <div className="box">
              <span>Città/Strada</span>
              <input type="text" placeholder="Località" />
            </div>
            <div className="box">
              <span>Tipo di Proprietà</span>
              <input type="text" placeholder="Tipo di Proprietà" />
            </div>
            <div className="box">
              <span>Prezzo</span>
              <input type="text" placeholder="Prezzo" />
            </div>
            <div className="box">
              <h4>Filtri Avanzati</h4>
            </div>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
