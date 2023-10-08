import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vh;
    gap: 0.5em;
`
const Contato = styled.button`
    background-color: transparent;
    color: white;
    border: solid 2px #E95401;
    border-radius: 5px;
    width: 7em;
    margin-bottom: 1em;
`
const Direitos = styled.h3`
    color: #FFFFFF;
    opacity: 40%;
    font-size: 12px;
`

function Footer () {
    return (
        <>
            <Container>
                <Direitos>Todos os direitos reservados @ Thbarberclub</Direitos>
                <Contato>Contato</Contato>
            </Container>
        </>

    )
}

export default Footer