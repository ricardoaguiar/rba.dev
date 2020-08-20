import React from "react"
import { HomeContainer, HomeItem, HomeTitle, HomeSubtitle } from "./home-styled"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

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
