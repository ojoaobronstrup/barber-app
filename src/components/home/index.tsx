import styled from "styled-components"

const Images = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    height: 50vh;
    z-index: 1;
`

function Home () {
    return (
        <>
            <Images>
                <img src="/images/barbeiro.svg" alt="Barbeiro cortando cabelo"></img>
            </Images>
        </>
    )
}

export default Home