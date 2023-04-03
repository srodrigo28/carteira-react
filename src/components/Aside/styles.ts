import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    padding: 1rem;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    height: 1.9rem;
    display: flex;
    align-items: center;
`
export const LogImg = styled.img`
    height: 3rem;
    width: 3rem;
`
export const Title = styled.h3`
    color: ${props => props.theme.colors.white };
    margin: 10px;
    font-size: 1rem;
`;
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
`
export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info };

    display: flex;
    align-items: center;
    gap: 0.3rem;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
    > svg { font-size: 1.5rem; }
`
