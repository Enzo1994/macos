import { useEffect, useRef, useState } from "react"

export default function FaceTime() {
    const [videoSrc, setVideoSrc] = useState<MediaStream>()
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        (async () => {
            
            const mediaStream = await navigator.mediaDevices.getUserMedia({audio: true, video: { frameRate: { ideal: 100, max: 120 } } });
            const video = (document.getElementById('faceTimeVideo') as HTMLMediaElement)
            video.srcObject = mediaStream
            video.play()
        })()
    })
    return (<div>
        <video id="faceTimeVideo"  ></video>
    </div>)
}