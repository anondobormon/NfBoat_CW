import React from "react";
import { Fade } from "react-reveal";
import "./SubHeader.scss";

export default function SubHeader({ data }) {
  return (
    <div className="sub_header">
      <div className="container">
        <div className="sub_header_wrapper">
          <Fade bottom>
            <h2 className="header_title">{data.title}</h2>
          </Fade>
          <Fade delay={200} bottom>
            <p>{data.desc}</p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
