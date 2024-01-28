import styled from 'styled-components'
import {
  Card,
  Description,
  Item,
  ItemTitle,
  Meta,
  Tag
} from '../components/Card'

import { Link as BaseLink } from '../components/Link'
import { Colors } from '../styles/Colors'
import { SectionWrapper } from '../styles/Layout'
import { mobile } from '../styles/media-queries'
import { Pages } from '../utils/types'

export const Accomodation: React.FC = () => {
  return (
    <SectionWrapper id={Pages.ACCOMODATION}>
      <Wrapper>
        <Column>
          <Card title="Crac'h" bordered={true}>
            <Meta description="Logements les plus proche du lieu de mariage" />
            <Item>
              <Meta
                title={<ItemTitle>Le Fort Espagnol (💵)</ItemTitle>}
                description={
                  <Description>
                    <span>
                      Bungalows, emplacements pour tentes.{' '}
                      <Link url="https://www.fort-espagnol.com/sejournez/">
                        Plus d'information
                      </Link>
                    </span>
                  </Description>
                }
              />
              <Tag bordered={false}>Camping</Tag>
            </Item>
            <Item>
              <Meta
                title={<ItemTitle>Kerpunce</ItemTitle>}
                description={
                  <Description>
                    <Link url="https://www.booking.com/Share-C890zgQ">
                      Plus d'information
                    </Link>
                  </Description>
                }
              />
              <Tag bordered={false}>Chambre d'hôte</Tag>
            </Item>
          </Card>
          <Card title="Locmariaquer" bordered={true}>
            <Meta description="Lieu de la messe - 12 min en voiture du lieu du mariage" />
            <Item>
              <Meta
                title={<ItemTitle>Rêves de bord de mer</ItemTitle>}
                description={
                  <Description>
                    <Link url="https://www.booking.com/Share-z3UNCq">
                      Plus d'information
                    </Link>
                  </Description>
                }
              />
              <Tag bordered={false}>Chambre d'höte</Tag>
            </Item>
          </Card>
        </Column>
        <Column>
          <Card title="Saint Philibert" bordered={true}>
            <Meta description="13 min en voiture du lieu de mariage" />
            <Item>
              <Meta
                title={<ItemTitle>La villa Bel ange</ItemTitle>}
                description={
                  <Description>
                    <Link url="https://www.booking.com/Share-XSsf0c">
                      Plus d'information
                    </Link>
                  </Description>
                }
              />
              <Tag bordered={false}>Hôtel</Tag>
            </Item>
          </Card>
          <Card title="La Trinité-sur-Mer" bordered={true}>
            <Meta description="16 min en voiture du lieu de mariage" />
            <Item>
              <Meta
                title={<ItemTitle>Les chambre du Keriolet</ItemTitle>}
                description={
                  <Description>
                    <Link url="https://www.booking.com/Share-URCH5w">
                      Plus d'information
                    </Link>
                  </Description>
                }
              />
              <Tag bordered={false}>Chambres d'hôte</Tag>
            </Item>
            <Item>
              <Meta
                title={<ItemTitle>Le galet hôtel & spa</ItemTitle>}
                description={
                  <Description>
                    <Link url="https://www.booking.com/Share-3OHrTzs">
                      Plus d'information
                    </Link>
                  </Description>
                }
              />
              <Tag bordered={false}>Hôtel</Tag>
            </Item>
            <Item>
              <Meta
                title={<ItemTitle>Le lodge Kerisper</ItemTitle>}
                description={
                  <Description>
                    <Link url="https://www.booking.com/Share-URCH5w">
                      Plus d'information
                    </Link>
                  </Description>
                }
              />
              <Tag bordered={false}>Hôtel</Tag>
            </Item>
            <Item>
              <Meta
                title={<ItemTitle>Trinité Hotel</ItemTitle>}
                description={
                  <Description>
                    <Link url="https://www.booking.com/Share-BLBKkYc">
                      Plus d'information
                    </Link>
                  </Description>
                }
              />
              <Tag bordered={false}>Hôtel</Tag>
            </Item>
          </Card>
        </Column>
      </Wrapper>
    </SectionWrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 24px;
    gap: 24px;
    padding-bottom: 150px;

    @media ${mobile} {
        padding-bottom: 20px;
    }
`

const Column = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 0px 0px;
`

const Link = styled(BaseLink)`
  &:hover {
    color: ${Colors.green};
  }
`
