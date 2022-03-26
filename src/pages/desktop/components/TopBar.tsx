import { useEffect, useState } from 'react'
import { getBGColor } from '../../../scripts/init_phase'
import './TopBar.scss'
export default function TopBar() {
    const [linearGradient, setLinearGradient] = useState('')
    useEffect(() => {
        (async () => {
            const linearGradient = await getBGColor()
            setLinearGradient(linearGradient)
        })()
    })
    console.log(linearGradient)
    return (<div className='topbar' style={{ background: linearGradient }}>adffds</div>)
}