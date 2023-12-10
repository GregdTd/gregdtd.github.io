import { CalendarFilled, CompassFilled, GiftFilled, HomeFilled, RocketFilled } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu as BaseMenu } from 'antd'
import React from 'react'
import { scroller } from 'react-scroll'
import styled from 'styled-components'
import { Colors } from '../styles/Colors'

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

interface BaseMenuProps {
    mode: 'horizontal' | 'vertical' | 'inline'
    currentValueSelected: string | undefined
    setCurrentValue: React.Dispatch<string | undefined>
    showDrawer?: () => void
}
export const Menu: React.FC<BaseMenuProps> = ({ mode, currentValueSelected, setCurrentValue, showDrawer }) => {
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrentValue(e.key)
        if (showDrawer !== undefined) {
            showDrawer()
        }
        scroller.scrollTo(e.key, { smooth: true, duration: 500, offset: 30 })
    }

    return <SMenu onClick={onClick} selectedKeys={currentValueSelected ? [currentValueSelected] : undefined} mode={mode} items={items} />
}

const SMenu = styled(BaseMenu)`
    color: ${Colors.light_black};
    justify-content: flex-end;
    flex: auto;
    min-width: 0px;
`
