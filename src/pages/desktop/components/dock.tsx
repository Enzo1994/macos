import { BaseSyntheticEvent, useRef, useState } from "react";
import { useWindowStore } from "../../../store/store";
import "./dock.scss";
export default function Dock() {
  const { windowList, addToWindowList } = useWindowStore();
  const dockItemContainer = useRef<HTMLUListElement>(null);
  const [dockItems, setDockItems] = useState([
    {
      name: "访达",
      icon: require("@/assets/images/icons/finder.png"),
      width: 0,
      x: 0,
    },
    {
      name: "图书",
      icon: require("@/assets/images/icons/ibook.png"),
      width: 0,
      x: 0,
    },
    {
      name: "录音机",
      icon: require("@/assets/images/icons/voice_memos.png"),
      width: 0,
      x: 0,
    },
    {
      name: "地图",
      icon: require("@/assets/images/icons/maps.png"),
      width: 0,
      x: 0,
    },
    {
      name: "FaceTime通话",
      nameEn:'FaceTime',
      icon: require("@/assets/images/icons/facetime.png"),
      width: 0,
      x: 0,
    },
    {
      name: "设置",
      icon: require("@/assets/images/icons/settings.png"),
      width: 0,
      x: 0,
    },
    {
      name: "备忘录",
      icon: require("@/assets/images/icons/notes.png"),
      width: 0,
      x: 0,
    },
    {
      name: "音乐",
      icon: require("@/assets/images/icons/music.png"),
      width: 0,
      x: 0,
    },
    {
      name: "信息",
      icon: require("@/assets/images/icons/imessage.png"),
      width: 0,
      x: 0,
    },
    {
      name: "垃圾篓",
      icon: require("@/assets/images/icons/trash_can.png"),
      width: 0,
      x: 0,
    },
  ]);

  function mouseEnterHandler() {
    const items = dockItems.slice();
    const { current: container } = dockItemContainer;
    if (container) {
      (container.childNodes as NodeListOf<HTMLLIElement>).forEach((li, i) => {
        const { width, x } = li.getBoundingClientRect();
        items[i].width = width;
        items[i].x = x;
      });
      setDockItems(items);
    }
  }

  function mouseMoveHandler(e: any) {
    const { current: container } = dockItemContainer;
    if (container) {
      (container.childNodes as NodeListOf<HTMLLIElement>).forEach((li, i) => {
        const item = dockItems[i];
        const distance = item.x + item.width / 2 - e.clientX;
        const scale = Math.max(1, ((200 - Math.abs(distance)) / 200) * 3);
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

  function clickHandler(e:BaseSyntheticEvent){
    console.log(e.target.dataset.name)
    addToWindowList({ componentName: e.target.dataset.name, width: 200, height: 200 })
  }

  return (
    <div className="dock">
      <ul
        ref={dockItemContainer}
        onMouseEnter={mouseEnterHandler}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={clickHandler}
      >
        {dockItems.map((item) => (
          <li
            className="test-icon"
            key={item.name}
            style={{ backgroundImage: `url(${item.icon})` }}
            data-name={item.nameEn}
          ></li>
        ))}
      </ul>
    </div>
  );
}
