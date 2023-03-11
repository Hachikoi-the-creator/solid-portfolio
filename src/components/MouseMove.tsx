import { createSignal } from "solid-js";

export default function MouseMove() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  function handleMouseMove(
    event: MouseEvent & {
      currentTarget: HTMLDivElement;
      target: Element;
    }
  ) {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div onMouseMove={handleMouseMove}>
      The mouse position is {pos().x} x {pos().y}
    </div>
  );
}
