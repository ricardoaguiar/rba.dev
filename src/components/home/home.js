import React from "react"
import { HomeContainer, HomeItem, HomeTitle, HomeSubtitle } from "./home-styled"

const Home = () => {
  return (
    <HomeContainer>
      <HomeItem>
        <HomeTitle>Hi, I'm Ricardo. A full stack web developer.</HomeTitle>
        <HomeSubtitle>This is my portfolio.</HomeSubtitle>
      </HomeItem>
    </HomeContainer>
  )
}

export default Home
