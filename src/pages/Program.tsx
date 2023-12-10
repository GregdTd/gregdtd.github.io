import { Card as BaseCard, Tag as BaseTag } from 'antd'
import BaseMeta from 'antd/es/card/Meta'
import styled from 'styled-components'
import { Emoji as BaseEmoji } from '../components/Emoji'
import { Colors } from '../styles/Colors'
import { SectionWrapper } from '../styles/Layout'
import { mobile } from '../styles/media-queries'
import { Pages } from '../utils/types'

export const Program: React.FC = () => {
    return (
        <SectionWrapper id={Pages.PROGRAM}>
            <ColumnWrapper>
                <Column>
                    <Card title="Vendredi 14 juin" bordered={true}>
                        <Item>
                            <Meta
                                avatar={<Emoji value="⛪️" />}
                                title={<ItemTitle>Messe</ItemTitle>}
                                description={<Description>Église Notre Dame de Kedro à Locmariaquer</Description>}
                            />
                            <Tag bordered={false}>15h00</Tag>
                        </Item>

                        <Item>
                            <Meta avatar={<Emoji value="🍸" />} title={<ItemTitle>Cocktail</ItemTitle>} description={<Description>Château de Kérantré à Crac'h</Description>} />
                            <Tag bordered={false}>17h30</Tag>
                        </Item>
                        <Item>
                            <Meta avatar={<Emoji value="🍽️" />} title={<ItemTitle>Dîner</ItemTitle>} description={<Description>Château de Kérantré à Crac'h</Description>} />
                            <Tag bordered={false}>20h00</Tag>
                        </Item>
                        <Item>
                            <Meta avatar={<Emoji value="💃" />} title={<ItemTitle>Soirée</ItemTitle>} description={<Description>Château de Kérantré à Crac'h</Description>} />
                            <Tag bordered={false}>23h30</Tag>
                        </Item>
                    </Card>
                </Column>
                <Column>
                    <Card title="Samedi 15 juin" bordered={true}>
                        <Item>
                            <Meta
                                avatar={<Emoji value="🦪" />}
                                title={<ItemTitle>Retour de plage</ItemTitle>}
                                description={<Description>Château de Kérantré à Crac'h</Description>}
                            />
                            <Tag bordered={false}>17h30</Tag>
                        </Item>
                        <Item>
                            <Meta avatar={<Emoji value="🪩" />} title={<ItemTitle>Rebond</ItemTitle>} description={<Description>Château de Kérantré à Crac'h</Description>} />
                            <Tag bordered={false}>20h30</Tag>
                        </Item>
                    </Card>
                </Column>
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
`

const Column = styled.div`
    padding: 0px 0px;
`

const Emoji = styled(BaseEmoji)`
    padding-right: 15px;
`

const Card = styled(BaseCard)`
    width: 460px;
    box-shadow:
        rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px,
        rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;

    @media ${mobile} {
        width: 100%;
    }
`

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;

    .ant-card-meta-title {
        margin-bottom: 0 !important;
    }
`

const Tag = styled(BaseTag)`
    background-color: ${Colors.light_green};
    color: ${Colors.black};
    margin-bottom: 38px;
`

const Meta = styled(BaseMeta)`
    text-align: left;
    padding-bottom: 36px;
`
const ItemTitle = styled.div`
    margin-bottom: 0 !important;
    font-weight: normal;
    @media ${mobile} {
        font-size: 16px;
    }
`

const Description = styled.span`
    font-size: 16px;

    @media ${mobile} {
        font-size: 12px;
    }
`
