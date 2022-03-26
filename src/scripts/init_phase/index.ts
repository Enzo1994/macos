function getBGColor() {
    const offscreenCanvas = document.createElement('canvas')
    const ctx = offscreenCanvas.getContext('2d')
    if(!ctx) return
    // offscreenCanvas
    const imgPath = require('../../assets/images/others/lightmode-bg.jpg')
    const img = new Image()
    img.src = imgPath
    img.onload = () => {
        const { width } = img
        offscreenCanvas.width = width
        document.body.appendChild(offscreenCanvas)
        ctx.drawImage(img,0,0)
        for(let i = 1 ; i < 4; i++){
            const imgData = ctx.getImageData(width * i / 4, offscreenCanvas.height / 2, 1, 1)
            
            console.log('imgData', imgData);

        }
    }
}
function setGradientColor(buffer:Buffer){
    buffer.forEach(console.log)
}
function getBGImgAverageColor(buffer: ArrayBuffer){
    const len = buffer.byteLength;
    const typedArray = new Uint8Array(buffer)
    typedArray.forEach(console.log)

}



function storageBGColor() {
    
}

export {getBGColor}