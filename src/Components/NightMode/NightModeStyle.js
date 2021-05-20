import styled from 'styled-components';
import img from '../../img/moon.png';
import imgDay from '../../img/day.png';

export const NightIcon = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0px;
    cursor: pointer;
    background-image: url(${({ day }) => (day ? img : imgDay)});
    background-size: contain;
    display: inline-block;
`
