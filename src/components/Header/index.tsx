import styled from "styled-components"

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em;
`

function Header () {
    return (
        <Head>
            <img src="/images/profile-icon.svg"></img>
            <img src="/images/logo-instagram.svg"></img>
        </Head>
    )
}

export default Header