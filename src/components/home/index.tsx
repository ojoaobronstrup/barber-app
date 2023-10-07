import styled from "styled-components"

const Images = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 20vh 45vh;
    align-items: center;
    justify-items: center;
`
const Img = styled.img`
    //transform: scale(0.8);
`

function Home () {
    return (
        <>
            <Images>
                <img src="/images/logo-barbearia.svg"></img>
                <Img src="/images/barbeiro.svg"></Img>
            </Images>
        </>
    )
}

export default Home