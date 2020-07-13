import React from "react"
import { HomeContainer, HomeItem, HomeTitle, HomeSubtitle } from "./Home.styled"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeItem>
          <HomeTitle>Hi, I'm Ricardo</HomeTitle>
          <HomeSubtitle>
            a web developer based in 55°42'28.6"N 9°31'58.5"E
          </HomeSubtitle>
        </HomeItem>
      </HomeContainer>
    </>
  )
}

export default Home
