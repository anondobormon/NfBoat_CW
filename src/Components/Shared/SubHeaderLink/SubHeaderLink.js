import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./SubHeaderLink.scss";

export default function SubHeaderLink({ mon, link }) {
  return (
    <div className="sub_header_link container">
      <Fade>
        <ul>
          <li>
            <Link to={`/mon-compte`}>Mon compte</Link>{" "}
            <span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </li>

          <li>
            <Link to={`/${link}`}>{link}</Link>
          </li>
        </ul>
      </Fade>
    </div>
  );
}
