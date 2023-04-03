import styled from "styled-components";

interface ITitleContainerProps{
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 3rem;

`;

export const TitleContainer = styled.div<ITitleContainerProps>`

    > h1 {
        color: ${props => props.theme.colors.white}; 

        &::after {
            content: '';
            display: block;
            width: 6rem;
            border-bottom: 1rem solid ${props => props.lineColor }
        }
    }
`
export const Controllers = styled.div` display: flex; gap: 10px; `;