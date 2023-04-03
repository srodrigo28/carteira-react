import  Layout  from "./components/Layout";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Dashboard from "./pages/Dashboard";

export function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
            </Layout>
        </ThemeProvider>
    )
}
















