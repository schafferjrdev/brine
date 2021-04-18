import React from "react";
import ramo from "../../images/ramo.svg";
import "./style.scss";

const PartOne = () => {
  return (
    <div className="middle">
      <div className="numbers">
        <span>16</span>
        <span>04</span>
        <span>21</span>
      </div>
      <div class="names">
        <span>bruna</span>
        <span> & bine</span>
        <span>
          <img className="second-branch" src={ramo} alt="ramo" />
          <img src={ramo} alt="ramo" />
        </span>
      </div>
    </div>
  );
};

export default PartOne;
