import { Card as BaseCard, Tag as BaseTag } from 'antd'
import BaseMeta from 'antd/es/card/Meta'
import styled from 'styled-components'
import { Colors } from '../styles/Colors'
import { mobile } from '../styles/media-queries'

export const Card = styled(BaseCard)`
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
        max-width: 90vw;
    }
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;

    .ant-card-meta-title {
        margin-bottom: 0 !important;
    }
`

export const Tag = styled(BaseTag)`
    background-color: ${Colors.light_green};
    color: ${Colors.black};
    margin-bottom: 38px;
`

export const Meta = styled(BaseMeta)`
    text-align: left;
    padding-bottom: 36px;
    
    @media ${mobile} {
      font-size: 12px;
    }
`
export const ItemTitle = styled.div`
    margin-bottom: 0 !important;
    font-weight: normal;
    @media ${mobile} {
        font-size: 16px;
    }
`

export const Description = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 230px;

    @media ${mobile} {
        font-size: 12px;
        width: 160px;
    }
`
