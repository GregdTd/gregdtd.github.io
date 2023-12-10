import { ConfigProvider, Layout } from 'antd'
import { Footer as BaseFooter, Content } from 'antd/es/layout/layout'
import styled from 'styled-components'
import { NavigationBar } from './components/NavigationBar'
import { Housing } from './pages/Accomodation'
import { Place } from './pages/Location'
import { Program } from './pages/Program'
import { Welcome } from './pages/Welcome'
import { Colors } from './styles/Colors'

export const App = () => (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: 'caviar-dreams',
                fontSize: 18,
            },
            components: {
                Menu: {
                    horizontalItemSelectedColor: `${Colors.green}`,
                    itemSelectedColor: `${Colors.green}`,
                    itemHoverColor: `${Colors.green}`,
                },
            },
        }}
    >
        <Layout>
            <NavigationBar />
            <Content>
                <Welcome />
                <Program />
                <Place />
                <Housing />
            </Content>
            <Footer>All right reserved</Footer>
        </Layout>
    </ConfigProvider>
)

export default App

const Footer = styled(BaseFooter)`
    padding: 8px;
    font-size: 10px;
    text-align: center;
    background-color: ${Colors.white};
`
