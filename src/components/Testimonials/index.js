import React from "react";
import Carousel, {
  autoplayPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";

import { Next, Prev } from "../index";
import "./style.scss";

import testimonials from "./testimonials.json";

const Testimonials = () => {
  return (
    <Carousel
      className="carousel"
      plugins={[
        "infinite",
        "centered",
        {
          resolve: autoplayPlugin,
          options: {
            interval: 60000,
          },
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: <Prev />,
            arrowRight: <Next />,
            addArrowClickHandler: true,
          },
        },
      ]}
      animationSpeed={1000}
    >
      {testimonials.map((t) => (
        <div className="testimonials">
          <p className="text" dangerouslySetInnerHTML={{ __html: t.text }}></p>
          <p className="author">{t.author}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
