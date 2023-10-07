import styled from "styled-components"

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em;
`

const Button = styled.button`
    background-color: transparent;
    border: solid 2px #E95401;
    color: white;
    border-radius: 10px;
    width: 6em;
`

function Header () {
    return (
        <Head>
            <Button>Entrar</Button>
            <img src="public/images/logo-instagram.svg"></img>
        </Head>
    )
}

export default Header