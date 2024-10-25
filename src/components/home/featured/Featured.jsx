import React from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Tipi di proprietà in evidenza"
            subtitle="Trova tutti i tipi di proprietà."
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
