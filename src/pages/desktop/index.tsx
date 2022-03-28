import { formatDate } from "../../utils/date";
import Dock from "./components/dock";
import TopBar from "./components/TopBar";
import './index.scss'


export default function Desktop () {
    return (<div className="desktop">
        <TopBar />
        <Dock />
        {formatDate().day}</div>)
}