import styled from "styled-components"
import Footer from "../Footer"
import { useEffect } from "react"

const Foot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 28vh;
    gap: 5px;
`
const Sub = styled.h3`
    font-weight: 400;
    font-size: 12px;
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
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    cursor: pointer;
`

function Agendar () {
    useEffect(() => {
        localStorage.clear()
    })

    return (
        <Foot>
            <Sub>Um novo conceito de barbearia</Sub>
            <Agende onClick={()=>{ 
                return((window.location.pathname="/unidade"))
            }}>Agende seu horário</Agende>
            <Footer/>
        </Foot>
    )
}

export default Agendar