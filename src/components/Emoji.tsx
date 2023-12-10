import styled from 'styled-components'
import { mobile } from '../styles/media-queries'

const BaseEmoji: React.FC<{ value: string; className?: string }> = ({ value, className }) => <span className={className}>{value}</span>

export const Emoji = styled(BaseEmoji)`
    font-size: 32px;

    @media ${mobile} {
        font-size: 24px;
    }
`
