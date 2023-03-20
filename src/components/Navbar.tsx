import "../styles/navbar.scss";
import { Component, createSignal } from "solid-js";
import laptopCode from "../assets/white-laptop-code.svg";
import purpleHome from "../assets/pur-home.svg";

const Navbar: Component = () => {
  const [isBurgerOpen, setIsBurgerOpen] = createSignal(false);

  return (
    <nav class="navbar">
      <button
        class={`burger ${isBurgerOpen() ? "burger-open" : "burger-closed"}`}
        onClick={() => setIsBurgerOpen((prev) => !prev)}
      >
        <div />
        <div />
        <div />
      </button>

      <ul class={`nav-ul ${isBurgerOpen() ? "nav-open" : "nav-closed"}`}>
        {/* home */}
        <li class="icon">
          <a
            class="icon-link"
            href="#hero"
            onclick={() => setIsBurgerOpen(false)}
          >
            <img src={purpleHome} alt="goto home" class="icon-img" />
            <p class="icon-text">Home</p>
          </a>
        </li>

        {/* about me */}
        <li class="icon">
          <a
            href="#about-me"
            class="icon-link"
            onclick={() => setIsBurgerOpen(false)}
          >
            <img src={purpleHome} alt={"name"} class="icon-img" />
            <p class="icon-text">About</p>
          </a>
        </li>

        {/* projects */}
        <li class="icon">
          <a
            href="#projects"
            class="icon-link"
            onclick={() => setIsBurgerOpen(false)}
          >
            <img src={laptopCode} alt={"name"} class="icon-img" />
            <p class="icon-text">Projects</p>
          </a>
        </li>

        {/* contact me */}
        <li class="icon">
          <a
            href="#contact-me"
            class="icon-link"
            onclick={() => setIsBurgerOpen(false)}
          >
            <img src={purpleHome} alt={"name"} class="icon-img" />
            <p class="icon-text">Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
