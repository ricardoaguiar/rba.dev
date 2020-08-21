import React from "react"
import { HomeContainer, HomeItem, HomeTitle, HomeSubtitle } from "./home-styled"

const Home = () => {
  return (
    <HomeContainer>
      <HomeItem>
        <HomeTitle>Hi, I'm glad you found the site.</HomeTitle>
        <HomeSubtitle>Take a look at my latests projects below.</HomeSubtitle>
      </HomeItem>
    </HomeContainer>
  )
}

export default Home
