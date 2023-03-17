import "../styles/navbar.scss";
import { Component } from "solid-js";
import laptopCode from "../assets/white-laptop-code.svg";
import emailSvg from "../assets/white-email.svg";
import purpleHome from "../assets/pur-home.svg";

const Navbar: Component = () => {
  return (
    <nav class="navbar">
      <ul class="nav-ul">
        {/* hero */}
        <li class="icon">
          <a class="icon-link" href="#hero">
            <img src={purpleHome} alt="goto home" class="icon-img" />
            <p class="icon-text">Home</p>
          </a>
        </li>

        {/* projects */}
        <li class="icon">
          <a href="#projects" class="icon-link">
            <img src={laptopCode} alt={"name"} class="icon-img" />
            <p class="icon-text">Projects</p>
          </a>
        </li>

        {/* email */}
        <li class="icon">
          <a
            href="mailto:adan.more70@gmail.com?subject=I%20found%20your%20portfolio%20to%20be%20pretty%20interesting%2C%20would%20you%20like%20to%20schedule%20a%20call%3F"
            class="icon-link"
          >
            <img src={emailSvg} alt={"name"} class="icon-img" />
            <p class="icon-text">Email</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
