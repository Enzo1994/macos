import FaceTime from "../components/facetime/facetime";

export function getDPR(){
    document.body.style.setProperty('--dpr', String(window.devicePixelRatio))
}

export const componentList:{[key:string]: (props: any) => JSX.Element} = { FaceTime };
