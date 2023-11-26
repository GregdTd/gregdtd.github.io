import { CalendarFilled, CompassFilled, GiftFilled, HomeFilled, RocketFilled } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu as BaseMenu } from 'antd'
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

export const Menu: React.FC<{ mode: 'horizontal' | 'vertical' | 'inline' }> = ({ mode }) => {
    const [current, setCurrent] = useState('mail')

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
        scroller.scrollTo(e.key, { smooth: true, duration: 500 })
    }

    return <SMenu onClick={onClick} selectedKeys={[current]} mode={mode} items={items} />
}

const SMenu = styled(BaseMenu)`
    justify-content: flex-end;
    flex: auto;
    min-width: 0px;
`
