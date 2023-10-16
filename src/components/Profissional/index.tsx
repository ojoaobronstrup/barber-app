import styled from "styled-components"
import Footer from "../Footer"

const Secao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 68vh;
`
const Imagens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`
const Img = styled.img`
    position: relative;
    box-shadow: inset 0 -20px 15px rgba(233, 84, 1, 1);
    border-radius: 10px 10px 0 10px;
    cursor: pointer;
`
const Legenda = styled.figcaption`
    position: relative;
    bottom: 25px;
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 150px;
    background-color: transparent;
    font-weight: bold;
    font-size: 14px;
`

function Profissional () {
    return (
        <>
            <Secao>
                <h2>Selecione um profissional</h2>
                <Imagens>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                        }}/>
                        <Legenda>Primeiro Barbeiro</Legenda>
                    </figure>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                        }}/>
                        <Legenda>Segundo Barbeiro</Legenda>
                    </figure>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                        }}/>
                        <Legenda>Terceiro Barbeiro</Legenda>
                    </figure>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                        }}/>
                        <Legenda>Quarto Barbeiro</Legenda>
                    </figure>
                </Imagens>
            </Secao>
            <Footer/>
        </>
    )
}

export default Profissional