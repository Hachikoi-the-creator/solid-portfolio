import { Component } from "solid-js";
import SocialIcon from "../atoms/SocialIcon";
import twitter from "../../assets/socials/twitter.png";
import github from "../../assets/socials/github.svg";
import linkedin from "../../assets/socials/linkedin.svg";
import gmail from "../../assets/socials/gmail.svg";

const AboutSocials: Component = () => {
  return (
    <ul class="socials">
      <SocialIcon
        label="Email"
        img={gmail}
        link="mailto:adan.more70@gmail.com?subject=I%20found%20your%20portfolio%20to%20be%20pretty%20interesting%2C%20would%20you%20like%20to%20schedule%20a%20call%3F"
        isExternal={true}
      />
      <SocialIcon
        label="Linkedin"
        img={linkedin}
        link="https://www.linkedin.com/in/adan-moreno7/"
        isExternal={true}
      />
      <SocialIcon
        label="Github"
        img={github}
        link="https://github.com/Hachikoi-the-creator"
        isExternal={true}
      />
      <SocialIcon
        label="Twitter"
        img={twitter}
        link="https://twitter.com/8koi2"
        isExternal={true}
      />
    </ul>
  );
};

export default AboutSocials;
