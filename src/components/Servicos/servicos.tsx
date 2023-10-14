import styled from "styled-components"
import Footer from "../Footer"
import {useState} from "react"

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
    background-color: #E95401;
    border: 0;
    color: white;
    border-radius: 10px;
    height: 45px;
    width: 197px;
`

function Servicos () {
    const [active, setActive] = useState(false)
    return (
        <>
            <Secao>
                <h2>Selecione um serviço</h2>
                <DivLinks>
                <Links id="corte" onClick={()=> {
                        setActive(!active)
                        if(active===false) {
                            document.getElementById("corte")!.style.backgroundColor = "#E95401"
                            document.getElementById("corte-sel")!.style.backgroundColor = "white"
                        } else {
                            document.getElementById("corte")!.style.backgroundColor = "transparent"
                            document.getElementById("corte-sel")!.style.backgroundColor = "transparent"
                        }
                    }}>
                        CORTE <Selecionado id="corte-sel"></Selecionado>
                    </Links>
                    <Links id="barba" onClick={()=> {
                        setActive(!active)
                        if(active===false) {
                            document.getElementById("barba")!.style.backgroundColor = "#E95401"
                            document.getElementById("barba-sel")!.style.backgroundColor = "white"
                        } else {
                            document.getElementById("barba")!.style.backgroundColor = "transparent"
                            document.getElementById("barba-sel")!.style.backgroundColor = "transparent"
                        }
                    }}>
                        BARBA <Selecionado id="barba-sel"></Selecionado>
                    </Links>
                    <Links id="combo" onClick={()=> {
                        setActive(!active)
                        if(active===false) {
                            document.getElementById("combo")!.style.backgroundColor = "#E95401"
                            document.getElementById("combo-sel")!.style.backgroundColor = "white"
                        } else {
                            document.getElementById("combo")!.style.backgroundColor = "transparent"
                            document.getElementById("combo-sel")!.style.backgroundColor = "transparent"
                        }
                    }}>
                        COMBO <Selecionado id="combo-sel"></Selecionado>
                    </Links>
                    <Links id="sobrancelha" onClick={()=> {
                        setActive(!active)
                        if(active===false) {
                            document.getElementById("sobrancelha")!.style.backgroundColor = "#E95401"
                            document.getElementById("sobrancelha-sel")!.style.backgroundColor = "white"
                        } else {
                            document.getElementById("sobrancelha")!.style.backgroundColor = "transparent"
                            document.getElementById("sobrancelha-sel")!.style.backgroundColor = "transparent"
                        }
                    }}>
                        SOBRANCELHA <Selecionado id="sobrancelha-sel"></Selecionado>
                    </Links>
                </DivLinks>
                <Botao onClick={() => {window.location.pathname += "/profissional"}}>CONFIRMAR</Botao>
            </Secao>
            <Footer/>
        </>
    )
}

export default Servicos