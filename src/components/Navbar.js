import React from "react";
import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/my-portfolio" className="title">
        RIDDLES
      </Link>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Graphic Design Works</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
