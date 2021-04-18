import React from "react";
import logo from "../../images/br&ne.png";
import "./style.scss";

const Header = () => {
  const handleScrollTo = (c) => {
    const step1 = document.querySelector(c);
    step1.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="menu">
        <span onClick={() => handleScrollTo(".names-section")}>os noivos</span>
        <span onClick={() => handleScrollTo(".testimonials-section")}>
          depoimentos
        </span>
        <span onClick={() => handleScrollTo(".gallery-section")}>galeria</span>
      </div>
    </header>
  );
};

export default Header;
