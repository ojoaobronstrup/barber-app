import GlobalStyles from "./Components/GlobalStyles"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Agendar from "./Components/Agendar"
import Unidades from "./Components/Unidades/unidades"
import Servicos from "./Components/Servicos/servicos"
import Profissional from "./Components/Profissional"
import Data from "./Components/Data"
import Horario from "./Components/Horario"
import Agendamento from "./Components/Agendamento"
import Agendado from "./Components/Agendado"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <GlobalStyles />
          <Header />
          <Home />
          <Agendar />
        </>
      } />
      <Route path="/unidade" element={
        <>
          <GlobalStyles />
          <Header />
          <Unidades />
        </>
      } />
      <Route path="/unidade/servico" element={
        <>
          <GlobalStyles />
          <Header />
          <Servicos />
        </>
      } />
      <Route path="/unidade/servico/profissional" element={
        <>
          <GlobalStyles />
          <Header />
          <Profissional />
        </>
      } />
      <Route path="/unidade/servico/profissional/data" element={
        <>
          <GlobalStyles />
          <Header />
          <Data />
        </>
      } />
      <Route path="/unidade/servico/profissional/data/horario" element={
        <>
          <GlobalStyles />
          <Header />
          <Horario />
        </>
      } />
      <Route path="/unidade/servico/profissional/data/horario/agendamento" element={
        <>
          <GlobalStyles />
          <Header />
          <Agendamento />
        </>
      } />
      <Route path="/unidade/servico/profissional/data/horario/agendamento/agendado" element={
        <>
          <GlobalStyles />
          <Header />
          <Agendado />
        </>
      } />
    </Routes>
  )
} 

export default App
