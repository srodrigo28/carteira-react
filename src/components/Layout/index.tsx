import { Grid_Layout } from "./styles";
import { MainHeader } from "../MainHeader"
import  Content  from "../Content";
import { Aside } from "../Aside";
import Dashboard from "../../pages/Dashboard";

const Layout: React.FC = () => {
    return (
        <Grid_Layout>
            <MainHeader />
            <Content > <Dashboard />  </Content>
            <Aside /> 
        </Grid_Layout>
    )
}

export default Layout