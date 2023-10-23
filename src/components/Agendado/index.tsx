import Footer from "../Footer"
import styled from "styled-components"
import { Titulo } from "../Unidades/unidades"

const Secao = styled.section`
    height: 68vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Botao = styled.button`
    background-color: transparent;
    color: #E95401;
    border: solid 3px #E95401;
    width: 197px;
    height: 45px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 12px;
`

function Agendado () {
    return (
        <>
            <Secao>
                <Titulo>HORÁRIO AGENDADO</Titulo>
                <img src="/images/validacao.svg" alt="Validação" />
                <Botao onClick={()=> {window.location.pathname ="/"}}>Voltar ao início</Botao>
            </Secao>
            <Footer/>
        </>
    )
}

export default Agendado