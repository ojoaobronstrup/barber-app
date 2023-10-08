import styled from "styled-components"

const Foot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    gap: 0.5em;
`
const Agende = styled.button`
    background-color: #E95401;
    color: white;
    border-radius: 10px;
    width: 20em;
    height: 3.5em;
    z-index: 1;
    border-radius: 25px;
`
const Contato = styled.button`
    background-color: transparent;
    color: white;
    border: solid 2px #E95401;
    border-radius: 5px;
    width: 7em;
`
const Direitos = styled.h3`
    color: #FFFFFF;
    opacity: 40%;
    font-size: 12px;
`

function Footer () {
    return (
        <Foot>
            <h3>Um novo conceito de barbearia</h3>
            <Agende onClick={()=>{
                return((window.location.pathname="/unidade"))
            }}>Agende seu horário</Agende>
            <Direitos>Todos os direitos reservados @ Thbarberclub</Direitos>
            <Contato>Contato</Contato>
        </Foot>
    )
}

export default Footer