import { Component } from "solid-js";
import emailSvg from "../assets/white-email.svg";

const ContactMe: Component = () => {
  return (
    <section id="contact-me" class="contact-me p-top">
      <h2>Contact Me</h2>
      <div class="socials">
        <li class="icon">
          <a
            href="mailto:adan.more70@gmail.com?subject=I%20found%20your%20portfolio%20to%20be%20pretty%20interesting%2C%20would%20you%20like%20to%20schedule%20a%20call%3F"
            class="icon-link"
          >
            <img src={emailSvg} alt={"name"} class="icon-img" />
            <p class="icon-text">Email</p>
          </a>
        </li>
      </div>
    </section>
  );
};

export default ContactMe;
