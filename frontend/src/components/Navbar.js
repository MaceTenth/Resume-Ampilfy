import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav__container">
      <li className="list__item">
        <Link className="nav__item" to="/">
          About
        </Link>
      </li>
      <li className="list__item">
        <Link className="nav__item" to="/explain">
          How does it work?
        </Link>
      </li>
      <li className="list__item">
        <Link className="nav__item" to="/Contact">
          Contact us
        </Link>
      </li>
    </div>
  );
};
export default Navbar;
