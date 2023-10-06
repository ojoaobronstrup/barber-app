import styled from "styled-components"

const Button = styled.button`
    border: solid 2px #E95401;
    background-color: transparent;
    color: #FFFFFF;
    border-radius: 10px;
    width: 6em;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 1em;
`


function Home () {
    return (
        <Header>
            <Button>Entrar</Button>
            <img src="../public/images/logo-instagram.svg" alt="Logo do insta"></img>
        </Header>
    )
}

export default Home;