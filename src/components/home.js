import React from "react"
import styled from "styled-components"

const Home = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: #001234;
  color: white;
  display: flex;
  align-items: center;
`
const HomeTitle = styled.div`
  background-color: #012345;
  margin: 0 auto;
  border: solid 1px #123456;
  max-width: 75vw;
  padding: 5rem;
`
const home = () => {
  return (
    <Home>
      <HomeTitle>
        <h1>Hi, I'm Ricardo</h1>
        <h2>
          a wed developer who loves the challenges of building and learning new
          things.
        </h2>
      </HomeTitle>
    </Home>
  )
}

export default home
