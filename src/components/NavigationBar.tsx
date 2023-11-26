import { CalendarFilled, CompassFilled, GiftFilled, HomeFilled, RocketFilled } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React, { useState } from 'react'
import { scroller } from 'react-scroll'
import styled from 'styled-components'

const items: MenuProps['items'] = [
    {
        label: 'Programme',
        key: 'program',
        icon: <CalendarFilled />,
    },
    {
        label: 'Accès',
        key: 'place',
        icon: <CompassFilled />,
    },
    {
        label: 'Logements',
        key: 'housing',
        icon: <HomeFilled />,
    },
    {
        label: 'Activités',
        key: 'activity',
        icon: <RocketFilled />,
    },
    {
        label: 'Liste de mariage',
        key: 'list',
        icon: <GiftFilled />,
    },
]

export const NavigationBar: React.FC = () => {
    const [current, setCurrent] = useState('mail')

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
        scroller.scrollTo(e.key, { smooth: true, duration: 500 })
    }

    return (
        <Wrapper>
            <Title>Vendredi 14 Juin 2024</Title>
            <StyledMenu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    padding: 0px 8px;
`

const Title = styled.span`
    width: 165px;
`

const StyledMenu = styled(Menu)`
    justify-content: flex-end;
    flex: auto;
    min-width: 0px;
`
