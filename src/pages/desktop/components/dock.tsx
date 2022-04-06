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
  const [dockItems, setDockItems] = useState([
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
    {
      name: "FaceTime通话",
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0
    },
  ]);
  function mouseEnterHandler() {
    const items = dockItems.slice()
    const { current: container } = dockItemContainer;
    if (container) {
      (container.childNodes as NodeListOf<HTMLLIElement>).forEach((li, i) => {
        const { width, x } = li.getBoundingClientRect();
        items[i].width = width
        items[i].x = x
      });
      setDockItems(items)
    }
  }
  function mouseMoveHandler(e: any) {
    const { current: container } = dockItemContainer;
    if (container) {
      (container.childNodes as NodeListOf<HTMLLIElement>).forEach((li, i) => {
        const item = dockItems[i]
        const distance = item.x + item.width / 2 - e.clientX;
        const scale = Math.max(1, ((100 - Math.abs(distance)) / 100) * 3.5);
        li.style.setProperty("--scale", String(scale));
      });
    }
  }
  function mouseLeaveHandler() {
    const { current: container } = dockItemContainer;
    if (container) {
      (container.childNodes as NodeListOf<HTMLLIElement>).forEach((li) => {
        li.style.setProperty("--scale", "1");
      });
    }
  }

  return (
    <div className="container">
      <div className="dock"></div>
      <ul
        ref={dockItemContainer}
        onMouseEnter={mouseEnterHandler}
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
