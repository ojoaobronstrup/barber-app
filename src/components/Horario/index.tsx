import styled from "styled-components"
import Footer from "../Footer"
import { Titulo } from "../Unidades/unidades"

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
    font-weight: 700;
`

function Horario () {
    return (
        <>
            <Secao>
                <Titulo>Selecione um horário</Titulo>
                <Container>
                    <Horarios>
                        <Hora id="oito" onClick={()=>{
                            const horario = document.getElementById("oito")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>08:00</Hora>
                        <Hora id="nove" onClick={()=>{
                            const horario = document.getElementById("nove")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>09:00</Hora>
                        <Hora id="dez" onClick={()=>{
                            const horario = document.getElementById("dez")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>10:00</Hora>
                        <Hora id="onze" onClick={()=>{
                            const horario = document.getElementById("onze")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>11:00</Hora>
                        <Hora id="treze" onClick={()=>{
                            const horario = document.getElementById("treze")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>13:00</Hora>
                        <Hora id="quatorze" onClick={()=>{
                            const horario = document.getElementById("quatorze")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>14:00</Hora>
                    </Horarios>
                    <Horarios>
                        <Hora id="quinze" onClick={()=>{
                            const horario = document.getElementById("quinze")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>15:00</Hora>
                        <Hora id="dezesseis" onClick={()=>{
                            const horario = document.getElementById("dezesseis")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>16:00</Hora>
                        <Hora id="dezessete" onClick={()=>{
                            const horario = document.getElementById("dezessete")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>17:00</Hora>
                        <Hora id="dezoito" onClick={()=>{
                            const horario = document.getElementById("dezoito")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>18:00</Hora>
                        <Hora id="dezenove" onClick={()=>{
                            const horario = document.getElementById("dezenove")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>19:00</Hora>
                        <Hora id="vinte" onClick={()=>{
                            const horario = document.getElementById("vinte")!.textContent!
                            localStorage.setItem("horario", horario)
                            window.location.pathname += "/agendamento"
                        }}>20:00</Hora>
                    </Horarios>
                </Container>
            </Secao>
            <Footer/>
        </>
    )
} export default Horario