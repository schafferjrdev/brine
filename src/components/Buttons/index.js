import React from "react";
import next from "../../images/next.svg";
import prev from "../../images/prev.svg";
import "./style.scss";

export const Next = () => {
  return (
    <button className="icon-button">
      <img src={next} alt="button next" />
    </button>
  );
};

export const Prev = () => {
  return (
    <button className="icon-button">
      <img src={prev} alt="button prev" />
    </button>
  );
};
