import { PropTypes } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import Window from "../common/window";
import "./facetime.scss";
export default function FaceTime(props:any) {
  const [videoSrc, setVideoSrc] = useState<MediaStream>();
  const [videoSize, setVideoSize] = useState({width:854, height:480});
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    (async () => {
    //   const mediaStream = await navigator.mediaDevices.getUserMedia({
    //     audio: true,
    //     video: {
    //       ...videoSize,
    //       frameRate: { ideal: 30, max: 60 },
    //     },
    //   });
    //   const video = document.getElementById(
    //     "faceTimeVideo"
    //   ) as HTMLMediaElement;
    //   video.srcObject = mediaStream;
    //   video.play();
    })();
  });

  return (
    <div className="facetime">
      <Window width={854} height={480} id={props.id}>
        <video id="faceTimeVideo"></video>
        <div className="facetime-connections" data-moveable-area></div>
      </Window>
    </div>
  );
}
