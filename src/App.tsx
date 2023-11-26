import { ConfigProvider } from 'antd'
import { NavigationBar } from './components/NavigationBar'
import { Housing } from './pages/Housing'
import { Place } from './pages/Place'
import { Welcome } from './pages/Welcome'
import { Colors } from './styles/Color'

export const App = () => (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: 'caviar-dreams',
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
        <NavigationBar />
        <Welcome />
        <Place />
        <Housing />
    </ConfigProvider>
)

export default App
