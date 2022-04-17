import { useEffect, useRef, useState } from "react";
import Window from "../common/window";
import "./facetime.scss";
export default function FaceTime(props: any) {
  const [videoSize] = useState({ width: 854, height: 480 });
  const mediaStreamRef = useRef<MediaStream>();
  useEffect(() => {
    (async () => {
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          ...videoSize,
          frameRate: { ideal: 30, max: 60 },
        },
      });
      const video = document.getElementById(
        "faceTimeVideo"
      ) as HTMLMediaElement;
      video.srcObject = mediaStreamRef.current;
      video.play();
    })();
    return () => beforeDestroy();
  }, [videoSize]);

  function beforeDestroy() {
    console.log(mediaStreamRef.current);
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
  }

  return (
    <div className="facetime">
      <Window width={854} height={480} id={props.winInfo.id}>
        <video id="faceTimeVideo"></video>
        <div className="facetime-connections" data-moveable-area></div>
      </Window>
    </div>
  );
}
