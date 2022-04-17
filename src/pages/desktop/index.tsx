import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { createElement, useCallback, useEffect } from "react";
import { store, useWindowStore, WindowStore } from "../../store/store";
import { componentList } from "../../utils";
import { formatDate } from "../../utils/date";
import Dock from "./components/dock";
import TopBar from "./components/top-bar";
import "./index.scss";

function Desktop() {
  const {windowList, count} = useWindowStore();
  console.log('componentList', componentList);
  console.log('count', count);
  // console.log('windowList', windowList);
  // useEffect(() => ), []);

  return (
    <div className="desktop">
      <TopBar />
      <Dock />
      {windowList.map((win: any) => {
        win = toJS(win)
        const componentName = win.componentName as string
        const Comp = componentList[componentName]
        return <Comp key={win.id} winInfo={win}/>
      })}
    </div>
  );
}
export default observer(Desktop);
