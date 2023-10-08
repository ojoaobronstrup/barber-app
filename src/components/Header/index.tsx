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

function Header () {
    return (
        <Head>
            <Img src="/images/profile-icon.svg"></Img>
            <img src="/images/logo-barbearia.svg"></img>
            <Img src="/images/logo-instagram.svg"></Img>
        </Head>
    )
}

export default Header