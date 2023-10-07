import styled from "styled-components"

const Images = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Home () {
    return (
        <>
            <Images>
                <img src="/images/logo-barbearia.svg"></img>
                <img src="/images/barbeiro.svg"></img>
            </Images>
        </>
    )
}

export default Home