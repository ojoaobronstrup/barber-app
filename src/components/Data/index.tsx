import styled from 'styled-components'
import Footer from '../Footer'
import { Botao } from '../Servicos/servicos'


const Secao = styled.section`
    height: 68vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

function Data () {
  return (
    <>
        <Secao>
            <h2>Selecione uma data</h2>
            <input type='date'></input>
            <Botao onClick={()=>{
              window.location.pathname+="/horario"
            }}>CONFIRMAR</Botao>
        </Secao>
        <Footer/>
    </>

  )
}

export default Data

