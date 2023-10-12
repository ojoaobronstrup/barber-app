import styled from "styled-components"
import Footer from "../Footer"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 68vh;
    align-items: center;
    justify-content: start;
    gap: 10em;
`
const Titulo = styled.h2`
    font-size: 1.5em;
`
const LocaisContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`
const Locais = styled.a`
    border: solid 0.2em #E95401;
    border-radius: 25px;
    width: 14em;
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Unidades () {
    return(
        <>
            <Container>
                <Titulo>Selecione uma unidade</Titulo>
                <LocaisContainer>
                    <Locais onClick={()=> {console.log(window.location.pathname+="/servico")}}>Santa Maria</Locais>
                    <Locais onClick={()=> {window.location.pathname+="/servico"}}>Passo Fundo</Locais>
                    <Locais onClick={()=> {window.location.pathname+="/servico"}}>Ijuí</Locais>
                </LocaisContainer>
            </Container>
            <Footer/>
        </>
    )
}

export default Unidades