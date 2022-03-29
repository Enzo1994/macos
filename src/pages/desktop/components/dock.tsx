import {
  BaseSyntheticEvent,
  ElementRef,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import "./dock.scss";
export default function Dock() {
  const dockItemContainer = useRef<HTMLUListElement>(null);

  function mouseMoveHandler(e: any) {
    const { current: container } = dockItemContainer;
    if (container) {
      (container.childNodes as NodeListOf<HTMLLIElement>).forEach((li, i) => {
        const { width, height, x, y } = li.getBoundingClientRect();
        const distance = x + width / 2 - e.clientX;
        const scale = Math.max(1, ((200 - Math.abs(distance)) / 200) * 3.5);
        li.style.setProperty("--scale", String(scale));
      });
    }
  }
  function mouseLeaveHandler(e: any) {
    const { current: container } = dockItemContainer;
    if (container) {
      (container.childNodes as NodeListOf<HTMLLIElement>).forEach((li) => {
        li.style.setProperty("--scale", "1");
      });
    }
  }
  const [dockItems, setDockItems] = useState([
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
    },
  ]);
  return (
    <div className="container">
      <div className="dock"></div>
      <ul
        ref={dockItemContainer}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {dockItems.map((item) => (
          <li
            className="test-icon"
            key={item.name}
            style={{ backgroundImage: `url(${item.icon})` }}
          ></li>
        ))}
      </ul>
    </div>
  );
}
