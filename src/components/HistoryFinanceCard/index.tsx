import { Container, Tag, TextAmount } from "./styles"

interface IHistoryFinanceCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    cardColor, tagColor, title, subtitle, amount }) => {
    return (
        <Container color={cardColor}>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <TextAmount>{amount}</TextAmount>
        </Container>
    )
}

export default HistoryFinanceCard;