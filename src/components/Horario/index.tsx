import styled from "styled-components"
import { Botao } from "../Servicos/servicos"
import Footer from "../Footer"
import { useState } from "react"

const Secao = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 68vh;
    flex-direction: column;
`
const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
`
const Horarios = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Hora = styled.h2`
    border: 3px solid #E95401;
    border-radius: 20px;
    width: 167px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Horario () {
    const [active, setActive] = useState(false)

    return (
        <>
            <Secao>
                <h1>Selecione um horário</h1>
                <Container>
                    <Horarios>
                        <Hora id="oito" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('oito')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('oito')!.style.backgroundColor = "transparent"
                            }
                        }}>08:00</Hora>
                        <Hora id="nove" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('nove')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('nove')!.style.backgroundColor = "transparent"
                            }
                        }}>09:00</Hora>
                        <Hora id="dez" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('dez')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('dez')!.style.backgroundColor = "transparent"
                            }
                        }}>10:00</Hora>
                        <Hora id="onze" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('onze')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('onze')!.style.backgroundColor = "transparent"
                            }
                        }}>11:00</Hora>
                        <Hora id="treze" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('treze')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('treze')!.style.backgroundColor = "transparent"
                            }
                        }}>13:00</Hora>
                        <Hora id="quatorze" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('quatorze')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('quatorze')!.style.backgroundColor = "transparent"
                            }
                        }}>14:00</Hora>
                    </Horarios>
                    <Horarios>
                        <Hora id="quinze" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('quinze')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('quinze')!.style.backgroundColor = "transparent"
                            }
                        }}>15:00</Hora>
                        <Hora id="dezesseis" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('dezesseis')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('dezesseis')!.style.backgroundColor = "transparent"
                            }
                        }}>16:00</Hora>
                        <Hora id="dezessete" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('dezessete')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('dezessete')!.style.backgroundColor = "transparent"
                            }
                        }}>17:00</Hora>
                        <Hora id="dezoito" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('dezoito')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('dezoito')!.style.backgroundColor = "transparent"
                            }
                        }}>18:00</Hora>
                        <Hora id="dezenove" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('dezenove')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('dezenove')!.style.backgroundColor = "transparent"
                            }
                        }}>19:00</Hora>
                        <Hora id="vinte" onClick={()=>{
                            setActive(!active)
                            if(active===true) {
                                document.getElementById('vinte')!.style.backgroundColor = "#E95401"
                            } else {
                                document.getElementById('vinte')!.style.backgroundColor = "transparent"
                            }
                        }}>20:00</Hora>
                    </Horarios>
                </Container>
                <Botao>CONFIRMAR</Botao>
            </Secao>
            <Footer/>
        </>
    )
} export default Horario