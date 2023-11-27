import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import { Header as BaseHeader } from 'antd/es/layout/layout'
import { useState } from 'react'
import { animateScroll } from 'react-scroll'
import { useMedia } from 'react-use'
import styled from 'styled-components'
import { Colors } from '../styles/Color'
import { Menu } from './Menu'

const TITLE = 'Vendredi 14 Juin'

export const NavigationBar = () => {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(!open)
    }
    const isTabletOrMobile = useMedia(`screen and (max-width: 1024px)`)

    return (
        <Header>
            <nav>
                <Title onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}>{TITLE}</Title>
                <NavBarMenu>
                    {isTabletOrMobile ? (
                        <>
                            <BurgerButton type="text" onClick={showDrawer}>
                                <MenuOutlined />
                            </BurgerButton>
                            <Drawer title={TITLE} placement="right" closable={true} onClose={showDrawer} open={open} style={{ zIndex: 99999 }}>
                                <Menu mode="inline" />
                            </Drawer>
                        </>
                    ) : (
                        <Menu mode="horizontal" />
                    )}
                </NavBarMenu>
            </nav>
        </Header>
    )
}

const Header = styled(BaseHeader)`
    padding-bottom: 1px;
    border-bottom: solid 1px #e8e8e8;
    background-color: ${Colors.white};
    box-shadow:
        0 3px 6px -2px rgba(0, 0, 0, 0.12),
        0 6px 16px -11px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    margin-bottom: 20px;
    z-index: 99990;

    background-color: white;
    border-bottom: 0;
    padding: 0 4px 0 24px;
`

const Title = styled.div`
    font-family: 'retro-signature';
    font-size: 40px;
    width: 200px;
    float: left;
`

const NavBarMenu = styled.div`
    width: calc(100% - 200px);
    float: left;
`

const BurgerButton = styled(Button)`
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 14px;
    margin-right: 10px;
`
