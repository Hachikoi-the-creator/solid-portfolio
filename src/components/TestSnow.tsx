import { Component, createSignal, Index } from "solid-js";
import "../styles/snow.scss";

const TestSnow: Component = () => {
  // End up being better to write it "by hand" to ensure good spread
  const [rndArr, setRndArr] = createSignal([
    4, 6, 2, 9, 5, 4, 2, 5, 7, 5, 9, 2, 8, 6, 3, 9, 1, 5, 3, 5, 8, 9, 2, 6, 3,
    4, 7, 1, 3, 9,
  ]);

  return (
    <div class="container">
      <div class="bubbles-wrapper">
        <Index each={rndArr()}>
          {(rndDelay) => (
            <div class="bubble" style={{ "--delaySec": rndDelay() }}></div>
          )}
        </Index>
      </div>
    </div>
  );
};

export default TestSnow;
