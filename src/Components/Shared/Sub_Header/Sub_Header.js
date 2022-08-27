import React from "react";
import "./Sub_Header.scss";

export default function Sub_Header({ data }) {
  return (
    <div className="sub_header">
      <div className="container">
        <div className="sub_header_wrapper">
          <h2 className="header_title">{data.title}</h2>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
}
