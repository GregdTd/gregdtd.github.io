import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import { Header as BaseHeader } from 'antd/es/layout/layout'
import { useState } from 'react'
import { animateScroll } from 'react-scroll'
import { useMedia } from 'react-use'
import styled from 'styled-components'
import { Colors } from '../styles/Colors'
import { Menu } from './Menu'

const TITLE = 'Vendredi 14 juin'

export const NavigationBar = () => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(undefined)
    const showDrawer = () => {
        setOpen(!open)
    }
    const isTabletOrMobile = useMedia(`screen and (max-width: 1024px)`)

    const onTitleClick = () => {
        setCurrent(undefined)
        animateScroll.scrollToTop({ duration: 500, smooth: true })
    }

    return (
        <Header>
            <nav>
                <Title onClick={onTitleClick}>{TITLE}</Title>
                <NavBarMenu>
                    {isTabletOrMobile ? (
                        <>
                            <BurgerButton type="text" onClick={showDrawer}>
                                <MenuOutlined />
                            </BurgerButton>
                            <Drawer title={TITLE} placement="right" closable={true} onClose={showDrawer} open={open} style={{ zIndex: 99999 }}>
                                <Menu mode="inline" showDrawer={showDrawer} currentValueSelected={current} setCurrentValue={setCurrent} />
                            </Drawer>
                        </>
                    ) : (
                        <Menu mode="horizontal" currentValueSelected={current} setCurrentValue={setCurrent} />
                    )}
                </NavBarMenu>
            </nav>
        </Header>
    )
}

const TITLE_WIDTH = 230
const Header = styled(BaseHeader)`
    color: ${Colors.black};
    padding-bottom: 1px;
    border-bottom: solid 1px #e8e8e8;
    background-color: ${Colors.white};
    box-shadow:
        0 3px 6px -2px rgba(0, 0, 0, 0.12),
        0 6px 16px -11px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 99990;
    padding: 0 24px;
`

const Title = styled.div`
    font-family: 'retro-signature';
    font-size: 50px;
    width: ${TITLE_WIDTH}px;
    float: left;
    cursor: pointer;
`

const NavBarMenu = styled.div`
    width: calc(100% - ${TITLE_WIDTH}px);
    float: left;
`

const BurgerButton = styled(Button)`
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 14px;
    margin-right: 10px;
`
