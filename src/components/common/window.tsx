import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import { IWindowProps, Positions } from "../../utils/types";
import "./window.scss";

let mouseToWindowBoundingLength = { x: 0, y: 0 };

export default function Window(props: PropsWithChildren<IWindowProps>) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [windowPos, setWindowPos] = useState<Positions>({ top: 0, left: 0 });

  function cloneChildren() {
    const childrenWithProps = Children.map(props.children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, { onPointerDown: handleWindowMouseDown });
      }
      return child;
    });
    return childrenWithProps;
  }

  function handleMouseMove(e: PointerEvent) {
    setWindowPos({
      left: e.clientX - mouseToWindowBoundingLength.x,
      top: e.clientY - mouseToWindowBoundingLength.y,
    });
  }

  function handleWindowMouseDown(e: PointerEvent) {
    const elem = e.target as HTMLElement;
    if (elem.dataset.moveableArea) {
      const currentPos = windowRef.current?.getBoundingClientRect();
      if (!currentPos) return;
      mouseToWindowBoundingLength = {
        x: e.clientX - currentPos.x,
        y: e.clientY - currentPos.y,
      };

      window.addEventListener("pointermove", handleMouseMove);
      window.addEventListener(
        "pointerup",
        () => window.removeEventListener("pointermove", handleMouseMove),
        { once: true }
      );
    }
  }
  return (
    <div
      ref={windowRef}
      className="window"
      style={{
        width: props.width,
        height: props.height,
        left: windowPos.left + "px",
        top: windowPos.top + "px",
      }}
    >
    <div className="buttons">
        <button className="close"></button>
        <button className="minimize"></button>
        <button className="fullscreen"></button>
    </div>
      {cloneChildren()}
    </div>
  );
}
