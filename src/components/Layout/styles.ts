import styled from "styled-components";

 /** Layout 2 x 2
    *   MH = Main Header
    *   AS = Aside
    *   CT = Content
*/

export const Grid_Layout = styled.div`
    display: grid;

    grid-template-columns: 13rem auto;
    grid-template-rows: 3rem auto;

    grid-template-areas:
        'AS MH'
        'AS CT';

        height: 100%;
        

`