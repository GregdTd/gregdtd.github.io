import styled from 'styled-components'

import { useEffect, useState } from 'react'
import { Emoji as BaseEmoji } from '../components/Emoji'
import { Link } from '../components/Link'
import { Colors } from '../styles/Colors'
import { SectionWrapper } from '../styles/Layout'
import { mobile } from '../styles/media-queries'
import { Pages } from '../utils/types'

const BREAKPOINT_RESPONSIVE = 568
export const Activities: React.FC = () => {
  const [needLastSeparator, setNeedLastSeparator] = useState(
    window.innerWidth < BREAKPOINT_RESPONSIVE
  )

  useEffect(() => {
    const handleResize = () => {
      setNeedLastSeparator(window.innerWidth < BREAKPOINT_RESPONSIVE)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <SectionWrapper id={Pages.ACTIVITIES}>
      <Wrapper>
        <ColumnWrapper>
          <Activity>
            <Emoji value="🦪" />
            <Header>Déguster des fruits de mer</Header>
            <Link url="https://www.huitresledreve.com/degustation/">
              Maison Le Drève - Crac'h
            </Link>
            <Link url="https://maison-quintin.com/la-degustation/">
              Maison Quintin - Saint Philibert
            </Link>
            <Link url="https://www.aquaculturejaouen.com/degustation-chez-jaouen">
              Chez Jaouen - Saint Philibert
            </Link>
          </Activity>
          <LineSeparator />
          <Activity>
            <Emoji value="🚤" />
            <Header>Visiter l’Île-aux-Moines ou l’Île d'Arz</Header>
            <Link url="https://www.golfedumorbihan.bzh/explorer-vannes/activites-vannes/croisieres-traversees/croisieres/">
              Départ de Locmariaquer
            </Link>
          </Activity>
          <LineSeparator />
          <Activity>
            <Emoji value="🥾" />
            <Header>Randonnée autour du Golfe du Morbihan</Header>
            <Link url="https://www.golfedumorbihan.bzh/explorer-vannes/activites-vannes/randonnee-pedestre/">
              Site de l'office de Tourisme
            </Link>
          </Activity>
          <LineSeparator />
          <Activity>
            <Emoji value="⛵️" />
            <Header>
              Aller faire un tour sur le port de la Trinité-sur-mer pour admirer
              les bateaux de course
            </Header>
          </Activity>
        </ColumnWrapper>
        <ColumnWrapper>
          {needLastSeparator && <LineSeparator />}
          <Activity>
            <Emoji value="🥮" />
            <Header>
              Déguster un bon kouign-amann chez Anthony Pontgelard
            </Header>
          </Activity>
          <LineSeparator />
          <Activity>
            <Emoji value="🏖️" />
            <Header>
              Se baigner à la grand plage de Carnac ou celle du Men-dû à La
              Trinité-sur-Mer
            </Header>
            <Link url="https://plages.letelegramme.fr/56340/carnac">
              Pour en trouver d’autres, c’est ici
            </Link>
          </Activity>
        </ColumnWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 36px;
`

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 24px;
  padding-bottom: 32px;
  width: 85vw;

  @media ${mobile} {
    flex-direction: column;
    max-width: 85vw;
    width: unset;
    padding-bottom: 0px;
  }
`

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  text-align: justify;
`

const Emoji = styled(BaseEmoji)`
  display:flex;
  justify-content: center;
  padding-bottom: 8px;
`

const Header = styled.span`
  font-size: 18px;
`

const LineSeparator = styled.span`
  border-radius: 91% 9% 83% 17% / 60% 60% 40% 40% ;
  border: solid 2px ${Colors.light_green};
`
