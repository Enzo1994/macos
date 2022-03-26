import { formatDate } from "../../utils/date";
import TopBar from "./components/TopBar";
import './index.scss'
export default function () {
    return (<div className="desktop">
        <TopBar />
        {formatDate().day}</div>)
}