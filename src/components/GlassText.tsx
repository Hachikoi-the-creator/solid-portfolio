import { Component } from "solid-js";
import "../styles/glass.scss";

const GlassTest: Component = () => {
  return (
    <div class="glassy" style={{ "--glass-color": "#232323" }}>
      Another one bites the dust
    </div>
  );
};

export default GlassTest;
