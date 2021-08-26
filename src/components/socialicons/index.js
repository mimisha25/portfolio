import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../hook";

export default function Socialicons(params) {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href={socialprofils.github}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socialprofils.linkedin}>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
}
