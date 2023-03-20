import { Component } from "solid-js";

type Props = {
  label: string;
  link: string;
  isExternal: boolean;
  img: string;
};

const SocialIcon: Component<Props> = (props) => {
  const { label, img, link, isExternal } = props;

  if (isExternal)
    return (
      <li class="icon">
        <a href={link} class="icon-link" target="_blank">
          <img src={img} alt="missing icon" class="icon-img" />
          <p class="icon-text">{label}</p>
        </a>
      </li>
    );

  return (
    <li class="icon">
      <a href={link} class="icon-link">
        <img src={img} alt="missing icon" class="icon-img" />
        <p class="icon-text">{label}</p>
      </a>
    </li>
  );
};

export default SocialIcon;
