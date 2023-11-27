import styled from 'styled-components'
import { SectionWrapper } from '../styles/Layout'

export const Welcome: React.FC = () => {
    return (
        <SectionWrapper>
            <Title>
                Bienvenue sur le site du mariage de<Surname>Julie et Grégoire</Surname>
            </Title>
        </SectionWrapper>
    )
}

const Title = styled.h1`
    font-size: 28px;
`

const Surname = styled.div`
    font-family: 'retro-signature';
    font-size: 90px;
`
