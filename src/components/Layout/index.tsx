import { Grid_Layout } from "./styles";
import { MainHeader } from "../MainHeader"
import { Content } from "../Content";
import { Aside } from "../Aside";

export function Layout() {
    return (
        <Grid_Layout>
            <MainHeader />
            <Content />
            <Aside />
        </Grid_Layout>
    )
}