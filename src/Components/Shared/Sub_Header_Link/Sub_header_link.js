import React from "react";
import { Link } from "react-router-dom";
import "./Sub_header_link.scss";

export default function Sub_header_link({ mon, link }) {
  return (
    <div className="sub_header_link">
      <ul>
        <li>
          <Link to={`/${mon && mon}`}>Mon compte</Link>{" "}
          <span>
            <i class="fa-solid fa-chevron-right"></i>
          </span>
        </li>

        <li>
          <Link to="/">{link}</Link>
        </li>
      </ul>
    </div>
  );
}
