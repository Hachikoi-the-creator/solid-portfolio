import { Component, For } from "solid-js";
import figma from "../../assets/skills/figma.png";
import go from "../../assets/skills/go.png";
import hardhat from "../../assets/skills/hardhat.png";
import solidity from "../../assets/skills/solidity.png";
import python from "../../assets/skills/python.png";
import jest from "../../assets/skills/jest.png";
import jquery from "../../assets/skills/jquery.png";

const imgsArr = [figma, go, hardhat, solidity, python, jest, jquery];

const KnownTools: Component = () => {
  return (
    <For each={imgsArr} fallback={<div>No items</div>}>
      {(item, index) => (
        <div class="img-container" data-index={index()}>
          <img src={item} alt="missing-img" />
        </div>
      )}
    </For>
  );
};

export default KnownTools;
