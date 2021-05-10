import React, { useState } from 'react';
import styled from 'styled-components';
import {checkOn, checkOff } from './CheckStyle'

export const CheckBox = () => {

    const CheckBox = styled.div`
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: none;
        border: 1px solid black;
        display: inline-block;
        cursor: pointer;
    `

    const [ check, setCheck ] = useState("unfinished");

    const checkToggler = () => {
        if (check === "unfinished") {
        
        }
    }

    return (
        <CheckBox onClick={checkToggler}></CheckBox>
    )
}
