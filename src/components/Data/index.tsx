import styled from 'styled-components'
import Footer from '../Footer'
import { Botao } from '../Servicos/servicos'
import { useState } from "react";


const Secao = styled.section`
    height: 68vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

function Data() {
  const [data, setData] = useState("");

  return (
    <>
      <Secao>
        <h2>Selecione uma data</h2>
        <input
          id="data"
          type="date"
          onChange={(e) => {
            setData(e.target.value)
          }}
        />
        <Botao onClick={() => {
          window.location.pathname += "/horario";
          localStorage.setItem("data", data)
        }}>
          CONFIRMAR
        </Botao>
      </Secao>
      <Footer />
    </>
  );
}

export default Data;


