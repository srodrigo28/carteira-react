import { Container } from "./styles";

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

export function SelectInput<ISelectInputProps>( ){
    return(
        <Container>
            <select> 
                <option value="novo">novo</option>
                <option value="usado">usado</option>
                <option value="semi-novo">semi-novo</option>
            </select>
        </Container>
    )
}