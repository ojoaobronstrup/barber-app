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

function Unidades() {
    return(
        <>
            <Container>
                <Titulo>Selecione uma unidade</Titulo>
                <LocaisContainer>
                    <Locais id='sm' onClick={()=> {
                        window.location.pathname+="/servico"
                        localStorage.setItem("unidade", document.getElementById('sm')!.innerText)
                    }}>Santa Maria</Locais>
                    <Locais id='pf' onClick={()=> {
                        window.location.pathname+="/servico"
                        localStorage.setItem("unidade", document.getElementById('pf')!.innerText)
                    }}>Passo Fundo</Locais>
                    <Locais id='ij' onClick={()=> {
                        window.location.pathname+="/servico"
                        localStorage.setItem("unidade", document.getElementById('ij')!.innerText)
                    }}>Ijuí</Locais>
                </LocaisContainer>
            </Container>
            <Footer/>
        </>
    )
}

export default Unidades