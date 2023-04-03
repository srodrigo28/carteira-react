import { 
    Container,Header, LogImg, 
    MenuContainer, MenuItemLink,
    Title
} from './styles';
import { MdDashboard, MdArrowDownward,
         MdArrowUpward, MdExitToApp
} from 'react-icons/md';
import logoImg from './../../assets/logo.svg';

export function Aside() {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink ><MdDashboard /> Dashboard </MenuItemLink>
                <MenuItemLink ><MdArrowUpward /> Entradas </MenuItemLink>
                <MenuItemLink ><MdArrowDownward /> Saídas </MenuItemLink>
                <MenuItemLink ><MdExitToApp /> sair </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}