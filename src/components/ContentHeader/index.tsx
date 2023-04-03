import { Container, TitleContainer, Controllers } from "./styles";
import { SelectInput  } from './../SelectInput'

export function ContentHeader(){
    return(
        <Container>
            <TitleContainer><h1>Contanet Header</h1></TitleContainer>
            <Controllers>
               <SelectInput />
               <SelectInput />
               <SelectInput />
            </Controllers>
        </Container>
    )
}