import ContentHeader from "../../components/ContentHeader"
import HistoryFinanceCard from "../../components/HistoryFinanceCard"
import SelectInput from "../../components/SelectInput"
import { Container, Content } from "./styles"

// const Dashboard: React.FC = () => {
const List = () => {
    const options = [
        { value: 'Ana Sousa', label: 'Ana Sousa' },
        { value: 'Olivia', label: 'Olivia' },
        { value: 'Maria', label: 'Maria' },
    ]
    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="">
                <SelectInput options={options} />
            </ContentHeader>
            <Content>
                <HistoryFinanceCard
                    cardColor="#d04b38"
                    tagColor="red"
                    title="Conta de Luz"
                    subtitle="27/03/2023"
                    amount="R$ 180,00"
                />

                <HistoryFinanceCard
                    cardColor="#48e4a9"
                    tagColor="green"
                    title="Salário"
                    subtitle="27/03/2023"
                    amount="R$ 3.800,70,00"
                />

                <HistoryFinanceCard
                    cardColor="#d04b38"
                    tagColor="red"
                    title="Conta de Luz"
                    subtitle="27/03/2023"
                    amount="R$ 180,00"
                />

                <HistoryFinanceCard
                    cardColor="#d04b38"
                    tagColor="red"
                    title="Conta de Luz"
                    subtitle="27/03/2023"
                    amount="R$ 180,00"
                />

                <HistoryFinanceCard
                    cardColor="#48e4a9"
                    tagColor="green"
                    title="Projeto Web"
                    subtitle="27/03/2023"
                    amount="R$ 2.800,70,00"
                />
                 <HistoryFinanceCard
                    cardColor="#48e4a9"
                    tagColor="green"
                    title="Projeto Aulas"
                    subtitle="27/03/2023"
                    amount="R$ 12.800,70,00"
                />
                <HistoryFinanceCard
                    cardColor="#d04b38"
                    tagColor="red"
                    title="Conta de Luz"
                    subtitle="27/03/2023"
                    amount="R$ 180,00"
                />
            </Content>
        </Container>
    )
}

export default List