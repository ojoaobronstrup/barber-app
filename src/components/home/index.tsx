import styled from "styled-components"

const Images = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    height: 50vh;
    z-index: 1;
`
const Img = styled.img`
    width: 30vh;
`

function Home () {
    return (
        <>
            <Images>
                <Img src="/images/barbeiro.svg" alt="Barbeiro cortando cabelo"></Img>
            </Images>
        </>
    )
}

export default Home