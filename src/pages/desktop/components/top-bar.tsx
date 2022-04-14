import { useEffect, useState } from "react";
import { getBGColor } from "../../../scripts/init_phase";
import "./top-bar.scss";

const TopBar = () => {
  const [options] = useState(["文件", "编辑", "显示"]);
  const [linearGradient, setLinearGradient] = useState("");
  useEffect(() => {
    (async () => {
      const linearGradient = await getBGColor();
      setLinearGradient(linearGradient);
    })();
  });
  return (
    <div className="topbar" style={{ background: linearGradient }}>
      <span className="logo"></span>
      <span className="title">访达</span>
      <ul className="options">
        {options.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="control-btns">
        <button className="battery"></button>
        <button className="wifi"></button>
        <button className="control-center"></button>
        <button className="siri"></button>

      </div>
      <div className="date">
        <span className="daymonth">4月10日</span>
        <span className="week">周日</span>
        <span className="time">13:28</span>
      </div>
    </div>
  );
};

export default TopBar;
