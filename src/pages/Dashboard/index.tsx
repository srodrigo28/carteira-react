import React from 'react'
import { Container } from './styles'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

// const Dashboard: React.FC = () => {
const Dashboard = () => {
        
    const options = [
        { value: 'Ana Sousa', label: 'Ana Sousa' },
        { value: 'Olivia', label: 'Olivia' },
        { value: 'Maria', label: 'Maria' },
    ]

    return (
        <Container>
            <ContentHeader title='Suporte' lineColor='red' >
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard