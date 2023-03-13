import "../../styles/glowButton.scss";
import { Component } from "solid-js";

type ButtonProps = {
  text: string;
  url: string;
  isExternal: boolean;
};

const Button: Component<ButtonProps> = (props) => {
  const { text, url, isExternal } = props;

  if (isExternal)
    return (
      <a class="neon-button" href={url} target="_blank">
        {text}
      </a>
    );

  return (
    <a class="neon-button" href={url}>
      {text}
    </a>
  );
};

export default Button;
