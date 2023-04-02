import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;
    
    background: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray}

`;

export const Profile = styled.div`
    display: block;
    color: ${props => props.theme.colors.white}
`
export const Welcome = styled.p`

`

export const UserName = styled.span`

`