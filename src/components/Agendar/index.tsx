import styled from "styled-components"
import Footer from "../Footer"

const Foot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 28vh;
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
    border: none;
`

function Agendar () {
    return (
        <Foot>
            <h3>Um novo conceito de barbearia</h3>
            <Agende onClick={()=>{
                return((window.location.pathname="/unidade"))
            }}>Agende seu horário</Agende>
            <Footer/>
        </Foot>
    )
}

export default Agendar