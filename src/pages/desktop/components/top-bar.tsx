import { useEffect, useState } from "react";
import { getBGColor } from "../../../scripts/init_phase";
import { formatDate } from "../../../utils/date";
import { IformattedDate } from "../../../utils/types";
import "./top-bar.scss";

interface BatteryManager {
  readonly charging: boolean;
  readonly level: number;
}
interface DeviceBattery extends Navigator {
  getBattery(): Promise<BatteryManager>;
}

const TopBar = () => {
  const [options] = useState(["文件", "编辑", "显示"]);
  const [battery, setBattery] = useState(0);
  const [date, setDate] = useState<IformattedDate>({
    month: 0,
    day: 0,
    week: "",
    hour: 0,
    min: 0,
  });
  // const [linearGradient, setLinearGradient] = useState("");
  useEffect(() => {
    (async () => {
      const batteryManager = await (
        window.navigator as DeviceBattery
      ).getBattery();
      setBattery(batteryManager.level * 100);
      setDate(formatDate());
      // const linearGradient = await getBGColor();
      // setLinearGradient(linearGradient);
    })();
  },[]);
  return (
    <div className="topbar">
      <span className="logo"></span>
      <span className="title">访达</span>
      <ul className="options">
        {options.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="control-btns">
        <span>{battery}%</span>
        <button className="battery"></button>
        <button className="wifi"></button>
        <button className="control-center"></button>
        <button className="siri"></button>
      </div>
      <div className="date">
        <span className="daymonth">
          {date.month}月{date.day}日
        </span>
        <span className="week">{date.week}</span>
        <span className="time">{String(date.hour).padStart(2,'0')}:{String(date.min).padStart(2,'0')}</span>
      </div>
    </div>
  );
};

export default TopBar;
