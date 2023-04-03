import { Container, ToggleLabel, ToogleSelector } from "./styles"

export function Toogle() {
    
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToogleSelector
                checked
                uncheckedIcon={true}
                checkedIcon={true}
                onChange={ () => console.log('mudou') }
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}