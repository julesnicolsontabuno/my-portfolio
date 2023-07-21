import React from "react";
import "./About.css";

import me from "../../assets/images/about_me.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const About = () => {
  return (
    <div className="row">
      <div className="left-column">
        <p>So, who am I?</p>
        <img src={me} className="me-image" alt="About Me" />
      </div>
      <div className="right-column">
        <h1>I'm Jules Nicolson - A web developer</h1>
        <p>
          Hello there! I'm Jules Nicolson E. Tabuno, a web developer based in
          Cebu City, Philippines. I have a passion for web development and love
          to create for web and mobile devices. I'm currently seeking a
          frontend/backend developer position where I can learn to improve my
          programming skills and contribute my technical expertise to the
          development of the system software.
        </p>
        <div className="icons">
          <a
            href="https://github.com/julesnicolsontabuno"
            target="_blank"
            rel="noreferrer">
            <GitHubIcon sx={{ fontSize: 50 }} />
          </a>
          <a
            href="https://www.facebook.com/JoulesAsAUnit/"
            target="_blank"
            rel="noreferrer">
            <FacebookIcon sx={{ fontSize: 50 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/jules-nicolson-tabuno-a11392240/"
            target="_blank"
            rel="noreferrer">
            <LinkedInIcon sx={{ fontSize: 50 }} />
          </a>
          <a
            href="https://www.instagram.com/jukkie_ai/"
            target="_blank"
            rel="noreferrer">
            <InstagramIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
      </div>
    </div>
  );
};
