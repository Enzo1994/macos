import { createElement, useCallback, useEffect } from "react";
import { useWindowStore } from "../../store/store";
import { formatDate } from "../../utils/date";
import Dock from "./components/dock";
import TopBar from "./components/top-bar";
import "./index.scss";

export default function Desktop() {
  const { windowList, componentList, addToWindowList } = useWindowStore();
  useEffect(() => addToWindowList({ id: 3, width: 200, height: 200 }), []);

  return (
    <div className="desktop">
      <TopBar />
      <Dock />
      {/* {windowList.map(win => {
          return createElement('FaceTime')
      })} */}
      <componentList.FaceTime></componentList.FaceTime>
      {/* <FaceTime /> */}
      {formatDate().day}
    </div>
  );
}
