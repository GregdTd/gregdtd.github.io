import { ConfigProvider } from 'antd'
import { NavigationBar } from './components/NavigationBar'
import { Place } from './pages/Place'
import { Welcome } from './pages/Welcome'
import { Colors } from './styles/color'
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
    </ConfigProvider>
)

export default App
