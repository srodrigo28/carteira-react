import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 3rem;

`;

export const TitleContainer = styled.div`

    > h1 {
        color: ${props => props.theme.colors.white}; 

        &::after {
            content: '';
            display: block;
            width: 6rem;
            border-bottom: 1rem solid ${props => props.theme.colors.warning }
        }
    }
`
export const Controllers = styled.div` display: flex; gap: 10px; `;