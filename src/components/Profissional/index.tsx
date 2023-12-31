import styled from "styled-components"
import Footer from "../Footer"
import { Titulo } from "../Unidades/unidades"

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
    font-weight: 600;
    font-size: 12px;
`

function Profissional () {
    return (
        <>
            <Secao>
                <Titulo>Selecione um profissional</Titulo>
                <Imagens>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                            const primeiro:string = document.getElementById("primeiro")!.innerHTML
                            localStorage.setItem("barbeiro", primeiro)
                        }}/>
                        <Legenda id="primeiro">Primeiro Barbeiro</Legenda>
                    </figure>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                            const segundo:string = document.getElementById("segundo")!.innerHTML
                            localStorage.setItem("barbeiro", segundo)
                        }}/>
                        <Legenda id="segundo" >Segundo Barbeiro</Legenda>
                    </figure>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                            const terceiro:string = document.getElementById("terceiro")!.innerHTML
                            localStorage.setItem("barbeiro", terceiro)
                        }}/>
                        <Legenda id="terceiro" >Terceiro Barbeiro</Legenda>
                    </figure>
                    <figure>
                        <Img src="/images/profissional.svg" alt="Foto de um barbeiro" onClick={()=>{
                            window.location.pathname += "/data"
                            const quarto:string = document.getElementById("quarto")!.innerHTML
                            localStorage.setItem("barbeiro", quarto)
                        }}/>
                        <Legenda id="quarto" >Quarto Barbeiro</Legenda>
                    </figure>
                </Imagens>
            </Secao>
            <Footer/>
        </>
    )
}

export default Profissional