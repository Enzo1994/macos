export function getDPR(){
    document.body.style.setProperty('--dpr', String(window.devicePixelRatio))
}