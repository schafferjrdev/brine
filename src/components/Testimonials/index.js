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
            interval: 10000,
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
      //   breakpoints={{
      //     760: {
      //       plugins: [
      //         "infinite",
      //         "centered",
      //         "fastSwipe",
      //         {
      //           resolve: autoplayPlugin,
      //           options: {
      //             interval: 10000,
      //           },
      //         },
      //       ],
      //     },
      //   }}
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
