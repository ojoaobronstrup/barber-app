import "./App.css"
import styled from "styled-components"
import Home from "./components/home"

const Body = styled.div`
  background-color: #1A1A1A;
  height: 100vh;
`

function App() {
  return (
    <Body>
      <Home/>
    </Body>
  )
}

export default App
