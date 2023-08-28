import "../styles/testing.scss";
import { Component, createSignal } from "solid-js";

const TestInput: Component = () => {
  const [search, setSearch] = createSignal("");

  return (
    <form class="test-form">
      <p>the text: {search()}</p>

      <label>My input uwu</label>
      <input
        type="text"
        value={search()}
        onInput={(e) => {
          const value = e.currentTarget.value;
          if (value.includes("j")) return;
          setSearch(value);
        }}
      />
    </form>
  );
};

export default TestInput;
