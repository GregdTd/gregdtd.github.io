import { ConfigProvider, Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { NavigationBar } from './components/NavigationBar'
import { Housing } from './pages/Housing'
import { Place } from './pages/Place'
import { Program } from './pages/Program'
import { Welcome } from './pages/Welcome'
import { Colors } from './styles/Color'

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
                Layout: {
                    colorBgLayout: `${Colors.green}`,
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
