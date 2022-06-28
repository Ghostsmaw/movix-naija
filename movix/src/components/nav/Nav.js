import React, { useState, useEffect } from "react";
import movix from "../../assets/images/movix.png";
import profile from "../../assets/images/man.png";
import "./nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={movix} alt="Movix Logo" />
      <img className="nav__avatar" src={profile} alt="Profile" />
    </div>
  );
};

export default Nav;
