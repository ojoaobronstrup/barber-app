import Footer from "../Footer"
import styled from "styled-components"

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
`

function Agendado () {
    return (
        <>
            <Secao>
                <h1>HORÁRIO AGENDADO</h1>
                <img src="/images/validacao.svg" alt="Validação" />
                <Botao onClick={()=> {window.location.pathname ="/"}}>Voltar ao início</Botao>
            </Secao>
            <Footer/>
        </>
    )
}

export default Agendado