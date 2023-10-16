import GlobalStyles from "./Components/GlobalStyles"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Agendar from "./Components/Agendar"
import Unidades from "./Components/Unidades/unidades"
import Servicos from "./Components/Servicos/servicos"
import Profissional from "./Components/Profissional"
import Data from "./Components/Data"
import Horario from "./Components/Horario"

function App() {
  if(window.location.pathname === "/") {
    return (
      <>
        <GlobalStyles/>
        <Header/>
        <Home/>
        <Agendar/>
      </>
    )
  } else if (window.location.pathname === "/unidade") {
    return (
      <>
        <GlobalStyles/>
        <Header/>
        <Unidades/>
      </>
    )
  } else if (window.location.pathname === "/unidade/servico") {
  return(
    <>
      <GlobalStyles/>
      <Header/>
      <Servicos/>
    </>
  )
} else if (window.location.pathname === "/unidade/servico/profissional") {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Profissional/>
    </>
  )
} else if (window.location.pathname === "/unidade/servico/profissional/data") {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Data/>
    </>
  )
} else if (window.location.pathname === "/unidade/servico/profissional/data/horario") {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Horario/>
    </>
  )
}
} 

export default App
