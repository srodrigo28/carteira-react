import { Grid_Layout } from "./styles";
import { MainHeader } from "../MainHeader"
import  Content  from "../Content";
import { Aside } from "../Aside";
import Dashboard from "../../pages/Dashboard";
import List from "../../pages/List";

const Layout: React.FC = () => {
    return (
        <Grid_Layout>
            <MainHeader />
            <Content > <List />  </Content>
            <Aside /> 
        </Grid_Layout>
    )
}

export default Layout