import styled from "styled-components"
import Footer from "../Footer"
import {useState} from "react"
import { Titulo } from "../Unidades/unidades"

const Secao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 68vh;
`
const DivLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`
const Links = styled.a`
    border: solid 3px #E95401;
    width: 325px;
    height: 44px;
    border-radius: 25px;
    border-top-left-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`
const Selecionado = styled.div`
    display: block;
    border: solid 3px #E95401;
    border-radius: 100%;
    height: 28px;
    width: 28px;
    z-index: 1;
    position: absolute;
    right: 5px;
`
export const Botao = styled.button`
    background-color: #E95401;
    border: 0;
    color: white;
    border-radius: 10px;
    height: 45px;
    width: 197px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`

function Servicos () {
    
    const [corte, setCorte] = useState(false)
    const [barba, setBarba] = useState(false)
    const [platinacao, setPlatinacao] = useState(false)
    const [sobrancelha, setSobrancelha] = useState(false)

    return (
        <>
            <Secao>
                <Titulo>Selecione um serviço</Titulo>
                <DivLinks>
                <Links id="corte" onClick={()=> {
                        setCorte(!corte)
                        if(corte===false) {
                            document.getElementById("corte")!.style.backgroundColor = "#E95401"
                            document.getElementById("corte-sel")!.style.backgroundColor = "white"
                            localStorage.setItem("servicoCorte", document.getElementById('corte')!.innerText)
                        } else {
                            document.getElementById("corte")!.style.backgroundColor = "transparent"
                            document.getElementById("corte-sel")!.style.backgroundColor = "transparent"
                            localStorage.removeItem("servicoCorte")
                        }
                    }}>
                        CORTE <Selecionado id="corte-sel"></Selecionado>
                    </Links>
                    <Links id="barba" onClick={()=> {
                        setBarba(!barba)
                        if(barba===false) {
                            document.getElementById("barba")!.style.backgroundColor = "#E95401"
                            document.getElementById("barba-sel")!.style.backgroundColor = "white"
                            localStorage.setItem("servicoBarba", document.getElementById('barba')!.innerText)
                        } else {
                            document.getElementById("barba")!.style.backgroundColor = "transparent"
                            document.getElementById("barba-sel")!.style.backgroundColor = "transparent"
                            localStorage.removeItem("servicoBarba")
                        }
                    }}>
                        BARBA <Selecionado id="barba-sel"></Selecionado>
                    </Links>
                    <Links id="platinacao" onClick={()=> {
                        setPlatinacao(!platinacao)
                        if(platinacao===false) {
                            document.getElementById("platinacao")!.style.backgroundColor = "#E95401"
                            document.getElementById("platinacao-sel")!.style.backgroundColor = "white"
                            localStorage.setItem("servicoPlatinacao", document.getElementById("platinacao")!.innerText)
                        } else {
                            document.getElementById("platinacao")!.style.backgroundColor = "transparent"
                            document.getElementById("platinacao-sel")!.style.backgroundColor = "transparent"
                            localStorage.removeItem("servicoPlatinacao")
                        }
                    }}>
                        PLATINAÇÃO <Selecionado id="platinacao-sel"></Selecionado>
                    </Links>
                    <Links id="sobrancelha" onClick={()=> {
                        setSobrancelha(!sobrancelha)
                        if(sobrancelha===false) {
                            document.getElementById("sobrancelha")!.style.backgroundColor = "#E95401"
                            document.getElementById("sobrancelha-sel")!.style.backgroundColor = "white"
                            localStorage.setItem("servicoSobrancelha", document.getElementById('sobrancelha')!.innerText)
                        } else {
                            document.getElementById("sobrancelha")!.style.backgroundColor = "transparent"
                            document.getElementById("sobrancelha-sel")!.style.backgroundColor = "transparent"
                            localStorage.removeItem("servicoSobrancelha")
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