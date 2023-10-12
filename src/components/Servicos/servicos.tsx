import styled from "styled-components"
import Footer from "../Footer"

const Secao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 65vh;
`
const DivLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`
const Links = styled.a`
    border: solid 0.2em #E95401;
    width: 325px;
    height: 44px;
    border-radius: 25px;
    border-top-left-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Selecionado = styled.div`
    display: block;
    border: solid 0.2em #E95401;
    border-radius: 100%;
    height: 28px;
    width: 28px;
    z-index: 1;
    position: absolute;
    right: 5px;
`
const Botao = styled.button`
    background-color: #8B3200;
    border: 0;
    color: #A4A4A4;
    border-radius: 10px;
    height: 45px;
    width: 197px;
`

function Servicos () {
    return (
        <>
            <Secao>
                <h2>Selecione um serviço</h2>
                <DivLinks>
                    <Links id="link" onClick={()=> {
                        document.getElementById("link")!.style.backgroundColor = "#E95401"
                        document.getElementById("selecionado")!.style.backgroundColor = "white"
                    }}>
                        CORTE <Selecionado id="selecionado"></Selecionado>
                    </Links>
                    <Links id="link"> 
                        BARBA <Selecionado></Selecionado>
                    </Links>
                    <Links id="link"> 
                        COMBO <Selecionado></Selecionado>
                    </Links>
                    <Links id="link"> 
                        SOBRANCELHA <Selecionado></Selecionado>
                    </Links>
                </DivLinks>
                <Botao>CONFIRMAR</Botao>
            </Secao>
            <Footer/>
        </>
    )
}

export default Servicos