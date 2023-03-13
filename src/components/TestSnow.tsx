import { Component, createSignal, Index } from "solid-js";
import "../styles/snow.scss";

const TestSnow: Component = () => {
  // // console.log(delaysArray);
  // const [rndDelaysArray, setRndDelaysArray] = createSignal(delaysArray)

  // return (<div class="container">
  //   <div class="bubbles-wrapper">
  //     <Index each={rndDelaysArray()}>{(rndNum, i) =>
  //       <span class="bubble" style={`--i-${rndNum()}`}></span>
  //     }      </Index>
  //   </div>
  // </div>)
  // End up being better to write it "by hand" to ensure good spread
  const [cats, setCats] = createSignal([
    14, 10, 24, 26, 22, 21, 33, 28, 20, 10, 25, 29, 13, 8, 24, 32, 14, 27, 13,
    34, 16, 12, 23, 9, 33, 27, 19, 35, 14, 10, 24, 26, 22, 21, 33, 28, 20, 10,
    25, 29, 13, 8, 24, 32, 14, 27, 13, 34, 16, 12, 23, 9, 33, 27, 1,
  ]);

  return (
    <div class="container">
      <div class="bubbles-wrapper">
        <Index each={cats()}>
          {(rndDelay) => (
            <div class="bubble" style={{ "--delaySec": rndDelay() }}></div>
          )}
        </Index>
      </div>
    </div>
  );
};

export default TestSnow;
