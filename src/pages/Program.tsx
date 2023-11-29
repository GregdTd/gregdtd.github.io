import { Card as BaseCard, Tag as BaseTag } from 'antd'
import BaseMeta from 'antd/es/card/Meta'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import styled from 'styled-components'
import { Colors } from '../styles/Color'
import { SectionWrapper } from '../styles/Layout'
export const Program: React.FC = () => {
    dayjs.extend(customParseFormat)
    return (
        <SectionWrapper id="program" title="Programme">
            <ColumnWrapper>
                <Column>
                    <Card title="Vendredi 14 juin" bordered={true}>
                        <Item>
                            <Meta
                                avatar={<Emoji>⛪️</Emoji>}
                                title={<ItemTitle>Messe</ItemTitle>}
                                description={<Description>Église notre dame de Kedro à Locmariaquer</Description>}
                            />
                            <Tag bordered={false}>15h00</Tag>
                        </Item>

                        <Item>
                            <Meta avatar={<Emoji>🍸</Emoji>} title={<ItemTitle>Cocktail</ItemTitle>} description={<Description>Château de Kérantré à Crach'h</Description>} />
                            <Tag bordered={false}>17h30</Tag>
                        </Item>
                        <Item>
                            <Meta avatar={<Emoji>🍽️</Emoji>} title={<ItemTitle>Dîner</ItemTitle>} description={<Description>Château de Kérantré à Crach'h</Description>} />
                            <Tag bordered={false}>20h00</Tag>
                        </Item>
                        <Item>
                            <Meta avatar={<Emoji>💃</Emoji>} title={<ItemTitle>Soirée</ItemTitle>} description={<Description>Château de Kérantré à Crach'h</Description>} />
                            <Tag bordered={false}>23h30</Tag>
                        </Item>
                    </Card>
                </Column>
                <Column>
                    <Card title="Samedi 15 juin" bordered={true}>
                        <Item>
                            <Meta avatar={<Emoji>🦪</Emoji>} title={<ItemTitle>Retour de plage</ItemTitle>} description={<Description>Château de Kérantré à Crac'h</Description>} />
                            <Tag bordered={false}>17h30</Tag>
                        </Item>
                        <Item>
                            <Meta avatar={<Emoji>🪩</Emoji>} title={<ItemTitle>Rebond</ItemTitle>} description={<Description>Château de Kérantré à Crach'h</Description>} />
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
    gap: 36px;
`

const Column = styled.div`
    padding: 0px 0px;
`

const Card = styled(BaseCard)`
    box-shadow:
        rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px,
        rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    list-style-type: none;

    .ant-card-meta-title {
        margin-bottom: 0 !important;
    }
`

const Emoji = styled.span`
    font-size: 32px;
    padding-right: 15px;
`

const Tag = styled(BaseTag)`
    background-color: ${Colors.light_brown};
    color: ${Colors.dark_brown};
    margin-bottom: 38px;
`

const Meta = styled(BaseMeta)`
    text-align: left;
    padding-bottom: 36px;
`
const ItemTitle = styled.div`
    width: 360px;
    margin-bottom: 0 !important;
`

const Description = styled.span`
    font-size: 16px;
`
