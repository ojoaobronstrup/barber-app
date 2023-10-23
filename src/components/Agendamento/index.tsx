import styled from "styled-components"
import Footer from "../Footer"
import { Botao } from "../Servicos/servicos"
import { Titulo } from "../Unidades/unidades"

const Secao = styled.section`
    height: 68vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const Valores = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Agendamentos = styled.h2`
    border: solid #E95401 3px;
    border-radius: 20px;
    width: 347px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: lowercase;
    font-weight: 700;
`

function Agendamento () {
    return (
        <>
            <Secao>
                <Titulo>O seu agendamento:</Titulo>
                <Valores>
                    <Agendamentos>Data: {localStorage.getItem("data")}</Agendamentos>
                    <Agendamentos>Unidade: {localStorage.getItem("unidade")}</Agendamentos>
                    <Agendamentos>Serviço: {localStorage.getItem("servicoCorte")} {localStorage.getItem("servicoBarba")} {localStorage.getItem("servicoPlatinacao")} {localStorage.getItem("servicoSobrancelha")}</Agendamentos>
                    <Agendamentos>Barbeiro: {localStorage.getItem("barbeiro")}</Agendamentos>
                    <Agendamentos>Horário: {localStorage.getItem("horario")}</Agendamentos>
                </Valores>
                <Botao onClick={()=>{window.location.pathname += "/agendado"}}>CONFIRMAR</Botao>
            </Secao>
            <Footer/>
        </>
    )
}

export default Agendamento