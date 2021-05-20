import React, {useState} from 'react'
import {TextStyle,
        CheckStyle,
        CrossTask,
        Ul
        } 
        from './CheckBox/CheckStyle';
import Cross from '../img/cross.png';

export const TaskCompleted = ({categories, inputValue}) => {
    
    const [ isCheck, setIsCheck ] = useState(false);

    const toggler = () => {
        setIsCheck(!isCheck)
    }

    const [ isNotDelete, setIsDelete ] = useState(false);

    const deleteTask = () => {
        setIsDelete(!isNotDelete)
        
    }

    return (
        <>
            <Ul isNotDelete={isNotDelete}>
                <li key={inputValue}>
                    <CheckStyle 
                        isCheck={isCheck} 
                        onClick={toggler}
                    >
                    </CheckStyle>
                    <TextStyle 
                        isCheck={isCheck} 
                        toggler={toggler}
                    >
                        {categories}
                    </TextStyle>
                    <CrossTask
                        isNotDelete={isNotDelete} 
                        onClick={deleteTask} 
                        src={Cross}
                    >
                    </CrossTask>
                </li>
            </Ul>
        </>
    )
}
