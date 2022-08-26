import React, { useEffect, useState } from 'react'

const Scroll = () => {
    const bodyStyle = document.body.style

    const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === 'hidden')
    useEffect(()=>{
        bodyStyle.overflowY = isLocked ?'hidden':'auto'
    },[isLocked,bodyStyle])
    const togle =() => setIsLocked(!isLocked)
    return [isLocked,togle]
}

export default Scroll