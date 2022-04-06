import FaceTime from "../../components/facetime/facetime";
import { formatDate } from "../../utils/date";
import Dock from "./components/dock";
import TopBar from "./components/top-bar";
import './index.scss'


export default function Desktop () {
    return (<div className="desktop">
        <TopBar />
        <Dock />
        <FaceTime/>
        {formatDate().day}</div>)
}