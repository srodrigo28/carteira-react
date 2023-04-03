import styled from "styled-components";

interface IContainerProps{ color: string; }

interface ITagProps{ color: string; }

export const Container = styled.p<IContainerProps>`
    background-color: ${props => props.color};

    list-style: none;
    border-radius: 5px;
    
    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 15px;
    }

`;

export const Tag = styled.li<ITagProps>`
    margin-left: -10px;
    width: 10px;
    height: 60%;
    position: absolute;

    background-color: ${props => props.color};
`

export const TextAmount = styled.p`

`