import styled from 'styled-components';

export const CheckStyle = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${({ isCheck }) => (isCheck ? '#77acf1b0' : '#fff')};
    border: 1px solid #77acf1b0;
    display: inline-block;
    cursor: pointer;
    transition: background-color .4s ease-in-out;
`

export const TextStyle = styled.h3`
    text-decoration: ${({ isCheck }) => (isCheck ? 'line-through' : 'none')};
    margin-left: 1rem;
    padding: 0px;
    display: inline;
`

export const CrossTask = styled.img`
    width: 1.5rem;
    position: absolute;
    right: 5%;
    cursor: pointer;
`

export const Ul = styled.ul`
    border-bottom: 1px solid rgb(221, 221, 221);
    display: ${({ isNotDelete }) => (isNotDelete ? 'none' : 'block')};
`