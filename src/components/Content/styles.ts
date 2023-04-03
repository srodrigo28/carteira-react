import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    
    padding: 25px;

    height: calc(100vh);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${props => props.theme.colors.info};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }
`;
// https://www.udemy.com/course/react-e-typescript/learn/lecture/21312204#questions/17545008