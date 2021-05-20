import React, { useState } from 'react'
import {NightIcon} from './NightModeStyle'

export const NightMode = () => {

    const [day, setNight] = useState(false)

    const ChangeMode = () => {
        setNight(!day)
    }

    return (
        <>
         <NightIcon onClick={ChangeMode} day={day}/>   
        </>
    )
}
