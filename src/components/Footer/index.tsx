import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 10vh;
    gap: 15px;
`
const Contato = styled.button`
    background-color: transparent;
    color: #FFFFFF;
    border: solid 2px #E95401;
    border-radius: 5px;
    height: 19px;
    width: 84px;
    margin-bottom: 1em;
    font-size: 10px;
    font-weight: 300;
    cursor: pointer;
`
const Direitos = styled.h3`
    color: #FFFFFF;
    opacity: 40%;
    font-size: 10px;
    font-weight: 300;
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