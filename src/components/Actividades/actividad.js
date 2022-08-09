import styled from "styled-components";
import { ProgressBar } from 'react-bootstrap';
import { useState} from "react";

const ActivityContenedor=styled.div`
    width: 90%;
	margin: 20px auto;
	display: grid;
	grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(5, auto);
    grid-template-areas:"header header header"
                        "contenido contenido sidebar"
                        "contenido contenido ad"
                        "contenido contenido ad2"
                        "footer footer footer";
    padding: 10px;
    border-radius: 10px;
    @media screen and (max-width: 500px) {
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, auto);
        grid-template-areas:"header"
                        "contenido"
                        "sidebar"
                        "ad"
                        "ad2"
                        "footer";
        

    }
`
const Header=styled.header`
    border-radius: 20px 50px;
    border: 1px solid #fff;
    background-color: #E0EE78;
    padding: 0.6rem;
    font-size: 30px;
    text-align: center;
    grid-area: ${props => props.gridArea};
`

const Contenido=styled.article`
    background-color: #E0EE78;
    border: 5px solid #fff;
    padding: 30px;
    font-size: 30px;
    text-align: center;
    grid-area: ${props => props.gridArea};
`
const Sidebar=styled.aside`
    background-color: #F3AB6F;
    border: 1px solid #fff;
    padding: 40px;
    font-size: 30px;
    text-align: center;
    grid-area: ${props => props.gridArea};
`
const InfoExtra=styled.div`
    background-color: #F3AB6F;
    border: 1px solid #fff;
    padding: 40px;
    font-size: 30px;
    text-align: center;
    grid-area: ${props => props.gridArea};
`

const Footer=styled.footer`
    background-color: #5E96F1;
    border: 1px solid #fff;
    padding: 40px;
    font-size: 30px;
    text-align: center;
    grid-area: ${props => props.gridArea};
`
const Button=styled.button`
    background-color:transparent;
    cursor:grab;
`

export const MainContenedor=()=>{
    const [nowV,setnowV]=useState(50);
    return(
        <>
        <ActivityContenedor>
            <Header gridArea='header'>
            <ProgressBar animated variant="success" now={nowV} label={`${nowV}%`} />
            </Header>
            <Contenido gridArea='contenido'>
            <h1>Área principal del artículo</h1>
            <p>En este diseño, las áreas se muestran en el orden en que están escritas en las pantallas de menos de 500 píxeles de ancho. Pasamos a un diseño de dos columnas, y luego a uno de tres columnas mediante la redefinición de la rejilla y la colocación de los elementos en ella.</p>
            </Contenido>
            <Sidebar gridArea='sidebar'>Sidebar</Sidebar>
            <InfoExtra gridArea='ad'>Lorem</InfoExtra>
            <InfoExtra gridArea='ad2'>Lorem</InfoExtra>
            <Footer gridArea='footer'><Button onClick={()=>setnowV(nowV+10)}>Next</Button></Footer>
            
        </ActivityContenedor>
        </>
    )

}

//<Navbar gridArea='nav'>Nav</Navbar>