/// <reference types="vite-plugin-svgr/client" />
import styled from 'styled-components'
import BaseJulieGregPhoto from '../assets/jugreg.svg?react'

// import SeaBackground from '../assets/test.jpg'
import { Arrow } from '../components/Arrow'
import { SectionWrapper } from '../styles/Layout'
import { mobile } from '../styles/media-queries'

export const Welcome: React.FC = () => {
    return (
        <SectionWithBackground id="welcome">
            <Title>
                Bienvenue sur le site du mariage de<Surname>Julie et Grégoire</Surname>
            </Title>
            <Wrapper>
                <WrapperText>
                    <Text>Nous sommes très heureux et impatients de tous vous retrouver en juin pour célébrer l’amour et faire la fête.</Text>
                    <Text>
                        En attendant, nous vous avons concocté ce site sur lequel vous retrouverez toutes les infos nécessaires à la préparation de votre séjour breton: programme,
                        logements, propositions d’activités, plans d’accès et liste de mariage.
                    </Text>
                </WrapperText>
                <JulieGregPhoto />
            </Wrapper>
            <Arrow />
        </SectionWithBackground>
    )
}

const SectionWithBackground = styled(SectionWrapper)``

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0px 16px;

    @media ${mobile} {
        flex-direction: column;
    }
`

const JulieGregPhoto = styled(BaseJulieGregPhoto)`
    width: 50%;
    height: auto;

    @media ${mobile} {
        width: 100%;
        padding-top: 16px;
    }
`

const Title = styled.h1`
    font-size: 28px;

    @media ${mobile} {
        font-size: 18px;
    }
`

const Surname = styled.div`
    font-family: 'retro-signature';
    font-size: 90px;

    @media ${mobile} {
        font-size: 70px;
    }
`

const WrapperText = styled.div`
    width: 50%;
    font-size: 22px;

    @media ${mobile} {
        width: 100%;
        font-size: 16px;
    }
`

const Text = styled.div`
    text-align: left;
    padding-top: 24px;
`
