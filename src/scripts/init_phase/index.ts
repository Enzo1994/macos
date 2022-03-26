
function getBGColor(): Promise<string> {
    return new Promise((resolve, reject) => {
        const offscreenCanvas = document.createElement('canvas')
        const ctx = offscreenCanvas.getContext('2d')
        if (!ctx) return
        const imgPath = require('../../assets/images/others/lightmode-bg.jpg')
        const img = new Image()
        img.src = imgPath
        img.onload = () => {
            const { width, height } = img
            offscreenCanvas.width = width
            offscreenCanvas.height = height
            ctx.drawImage(img, 0, 0)
            let linearGradient = 'linear-gradient(to right'
            for (let i = 1; i < 4; i++) {
                const imgData = ctx.getImageData(width * i / 4, offscreenCanvas.height / 2 - 1, 1, 1)
                linearGradient += `,rgb(${imgData.data.slice(0, 3).reduce((prev, cur) => (prev ? prev + ',' + cur : String(cur)), '')})`
            }
            linearGradient += ')'
            resolve(linearGradient)
        }
        img.onerror = reject
    })

}

function setGradientColor(buffer: Buffer) {
    buffer.forEach(console.log)
}
function getBGImgAverageColor(buffer: ArrayBuffer) {
    const len = buffer.byteLength;
    const typedArray = new Uint8Array(buffer)
    typedArray.forEach(console.log)

}



function storageBGColor() {

}

export { getBGColor }