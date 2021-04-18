import React from "react";
import "./style.scss";

import {
  Header,
  PartOne,
  Footer,
  NamesCouple,
  Testimonials,
  Gallery,
} from "../components";

const LandingPage = () => {
  return (
    <>
      <div className="full bg-green part-one home-section">
        <Header />
        <PartOne />
      </div>
      <div className="full bg-white part-one names-section">
        <NamesCouple />
      </div>
      <div className="full bg-green testimonials-background testimonials-section">
        <Testimonials />
      </div>
      <div className="full bg-white part-one gallery-section">
        <Gallery />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
