import React from 'react';
import { TaskCompleted } from '../TaskCompleted';

export const CheckBox = ({categories}) => {

    return (
        <>
        {
            categories.map(category => (
                <TaskCompleted categories={category}/>
            ))
        }
        </>
    )
}
