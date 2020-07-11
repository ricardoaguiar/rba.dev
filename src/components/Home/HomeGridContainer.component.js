import React from "react"
import styled from "styled-components"
import Home from "./Home.component"

const HomeGrid = styled.section`
  display: grid;
  width: 100vw;
`

const HomeGridContainer = () => {
  return (
    <>
      <HomeGrid>
        <Home />
      </HomeGrid>
    </>
  )
}

export default HomeGridContainer
