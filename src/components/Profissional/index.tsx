import styled from "styled-components"
import Footer from "../Footer"

const Secao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 65vh;
`
const Imagens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`

function Profissional () {
    return (
        <>
            <Secao>
                <h2>Selecione um profissional</h2>
                <Imagens>
                    <img src="/images/profissional.svg" alt="Foto de um barbeiro" />
                    <img src="/images/profissional.svg" alt="Foto de um barbeiro" />
                    <img src="/images/profissional.svg" alt="Foto de um barbeiro" />
                    <img src="/images/profissional.svg" alt="Foto de um barbeiro" />
                </Imagens>
            </Secao>
            <Footer/>
        </>
    )
}

export default Profissional