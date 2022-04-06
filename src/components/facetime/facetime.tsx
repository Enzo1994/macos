import { useEffect, useRef, useState } from "react"
import WinStatusBtns from "../common/win-status-btns"
import './facetime.scss'
export default function FaceTime() {
    const [videoSrc, setVideoSrc] = useState<MediaStream>()
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        (async () => {
            
            // const mediaStream = await navigator.mediaDevices.getUserMedia({audio: true, video: { frameRate: { ideal: 100, max: 120 } } });
            // const video = (document.getElementById('faceTimeVideo') as HTMLMediaElement)
            // video.srcObject = mediaStream
            // video.play()
        })()
    })
    return (<div className="facetime">
        <div className="facetime-connections"></div>
        <video id="faceTimeVideo"></video>
    </div>)
}