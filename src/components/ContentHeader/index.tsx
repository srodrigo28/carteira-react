import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from './../SelectInput'

export function ContentHeader() {
    
    const options = [
        { value: 'Rodrigo', label: 'Rodrigo' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Joana', label: 'Joana' },
    ]

    return(
        <Container>
            <TitleContainer><h1>Contanet Header</h1></TitleContainer>
            <Controllers>
               <SelectInput options={options}  />
            </Controllers>
        </Container>
    )
}