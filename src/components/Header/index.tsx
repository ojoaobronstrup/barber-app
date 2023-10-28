import styled from "styled-components"

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 1em 0 1em;
    height: 20vh;
`
const Img = styled.img`
    align-self: self-start;
`
const Logo = styled.img`
    cursor: pointer;
`

function Header () {
    return (
        <Head>
            <Img src="/images/profile-icon.svg"></Img>
            <Logo src="/images/logo-barbearia.svg" onClick={()=>{
                window.location.pathname="/"
            }}></Logo>
            <Img src="/images/logo-instagram.svg"></Img>
        </Head>
    )
}

export default Header