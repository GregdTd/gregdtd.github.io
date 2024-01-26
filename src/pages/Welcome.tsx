/// <reference types="vite-plugin-svgr/client" />
import styled from 'styled-components'
import BaseJulieGregPhoto from '../assets/jugreg.svg?react'

import { Arrow as BaseArrow } from '../components/Arrow'
import { SectionWrapper as BaseSectionWrapper } from '../styles/Layout'
import { mobile } from '../styles/media-queries'
import { Pages } from '../utils/types'

export const Welcome: React.FC = () => {
  return (
    <SectionWrapper id={Pages.WELCOME}>
      <Title>
        Bienvenue sur le site du mariage de<Surname>Julie et Grégoire</Surname>
      </Title>
      <Wrapper>
        <WrapperText>
          <Text>
            Nous sommes très heureux et impatients de tous vous retrouver en
            juin pour célébrer l’amour et faire la fête.
          </Text>
          <Text>
            En attendant, nous vous avons concocté ce site sur lequel vous
            retrouverez toutes les infos nécessaires à la préparation de votre
            séjour breton: programme, logements, propositions d’activités, plans
            d’accès et liste de mariage.
          </Text>
        </WrapperText>
        <JulieGregPhoto />
      </Wrapper>
      <Arrow />
    </SectionWrapper>
  )
}

const SectionWrapper = styled(BaseSectionWrapper)`
    padding-top: 54px;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 16px;

    @media ${mobile} {
        flex-direction: column;
    }
`

const JulieGregPhoto = styled(BaseJulieGregPhoto)`
    width: 25%;
    height: auto;

    @media ${mobile} {
        width: 50vw;
        padding-top: 16px;
    }
`

const Title = styled.h1`
    font-size: 28px;
    margin: 0;

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
    width: 45%;
    font-size: 20px;
    margin-right: 24px;

    @media ${mobile} {
        width: 100%;
        font-size: 16px;
    }
`

const Text = styled.div`
    text-align: justify;
    hyphens: auto;
    padding-top: 24px;
`

const Arrow = styled(BaseArrow)`
    position: absolute;
    bottom: 0;
`
