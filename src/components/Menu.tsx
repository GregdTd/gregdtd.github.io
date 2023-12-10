import { CalendarFilled, CompassFilled, GiftFilled, HomeFilled, RocketFilled } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu as BaseMenu } from 'antd'
import React from 'react'
import { scroller } from 'react-scroll'
import styled from 'styled-components'
import { Colors } from '../styles/Colors'
import { Pages, PagesTitles } from '../utils/types'

const items: MenuProps['items'] = [
    {
        label: PagesTitles[Pages.PROGRAM],
        key: Pages.PROGRAM,
        icon: <CalendarFilled />,
    },
    {
        label: PagesTitles[Pages.LOCATION],
        key: Pages.LOCATION,
        icon: <CompassFilled />,
    },
    {
        label: PagesTitles[Pages.ACCOMODATION],
        key: Pages.ACCOMODATION,
        icon: <HomeFilled />,
    },
    {
        label: PagesTitles[Pages.ACTIVITIES],
        key: Pages.ACTIVITIES,
        icon: <RocketFilled />,
    },
    {
        label: PagesTitles[Pages.LIST],
        key: Pages.LIST,
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
