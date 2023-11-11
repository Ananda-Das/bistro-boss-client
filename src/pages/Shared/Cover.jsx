/* eslint-disable react/prop-types */

import { Parallax } from "react-parallax";

const Cover = ({ title, description, image }) => {
  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={image} bgImageAlt="the dog" strength={-200}>
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-[#15151599] p-36">
            <h1 className="mb-5 text-7xl font-bold ">{title}</h1>
            <p className="mb-5 text-2xl font-semibold">{description}</p>
          </div>
        </div>
      </div>
      {/* Blur transition from min to max
      <div style={{ height: "200px" }} /> */}
    </Parallax>
  );
};

export default Cover;
