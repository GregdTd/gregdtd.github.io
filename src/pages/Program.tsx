import styled from 'styled-components'

import { Emoji as BaseEmoji } from '../components/Emoji'

import { SectionWrapper } from '../styles/Layout'
import { mobile } from '../styles/media-queries'
import { Pages } from '../utils/types'

import {
  Card as BaseCard,
  Description,
  Item,
  ItemTitle,
  Meta,
  Tag
} from '../components/Card'

export const Program: React.FC = () => {
  return (
    <SectionWrapper id={Pages.PROGRAM}>
      <ColumnWrapper>
        <div>
          <Card title="Vendredi 14 juin" bordered={true}>
            <Item>
              <Meta
                avatar={<Emoji value="⛪️" />}
                title={<ItemTitle>Messe</ItemTitle>}
                description={
                  <Description>
                    Église Notre Dame de Kedro à Locmariaquer
                  </Description>
                }
              />
              <Tag bordered={false}>14h30</Tag>
            </Item>
            <Item>
              <Meta
                avatar={<Emoji value="🍸" />}
                title={<ItemTitle>Réception</ItemTitle>}
                description={
                  <Description>Château de Kérantré à Crac'h</Description>
                }
              />
              <Tag bordered={false}>17h30</Tag>
            </Item>
          </Card>
        </div>
        <div>
          <Card title="Samedi 15 juin" bordered={true}>
            <Item>
              <Meta
                avatar={<Emoji value="🦪" />}
                title={<ItemTitle>Retour de plage</ItemTitle>}
                description={
                  <Description>Château de Kérantré à Crac'h</Description>
                }
              />
              <Tag bordered={false}>17h30</Tag>
            </Item>
            <Item>
              <Meta
                avatar={<Emoji value="🪩" />}
                title={<ItemTitle>Rebond</ItemTitle>}
                description={
                  <Description>Château de Kérantré à Crac'h</Description>
                }
              />
              <Tag bordered={false}>20h30</Tag>
            </Item>
          </Card>
        </div>
      </ColumnWrapper>
    </SectionWrapper>
  )
}

const ColumnWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 24px;
    gap: 24px;
    padding-bottom: 150px;

    @media ${mobile} {
      padding-bottom: unset;
    }
`

const Emoji = styled(BaseEmoji)`
    padding-right: 15px;
`

const Card = styled(BaseCard)`
    min-height: 300px;
`
