import React, {useState} from 'react'
import {TextStyle, CheckStyle} from './CheckBox/CheckStyle'

export const TaskCompleted = ({categories, inputValue}) => {
    const styles = `
        li: {
            borderBottom: "1px solid rgb(221, 221, 221)",
        },
    `
    
    const [ isCheck, setIsCheck ] = useState(false);

    const toggler = () => {
        setIsCheck(!isCheck)
    }

    return (
        <>
            <ul style={styles.li}>
                <li key={inputValue}>
                    <CheckStyle isCheck={isCheck} onClick={toggler}></CheckStyle>
                    <TextStyle isCheck={isCheck} toggler={toggler}>{categories}</TextStyle>
                </li>
            </ul>
        </>
    )
}
