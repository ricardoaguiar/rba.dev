import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Ricardo from "./Ricardo"

export const HomeContainer = styled.header`
  display: flex;
  flex: 1 0 auto;
  margin: 50px 0 0 0;
  padding: 0;
  color: var(--rbadev-mono-2-hex);

  ${respondTo.T900`
  max-width: calc(100vw - 70px);
  margin-left: 70px;
  margin-top: 0;
  padding: 1vh 0 0 5vw;
  background: var(--rbadev-mono-5-hex);
  align-items: center;
  `};
`

export const HomeTitle = styled.h1`
  line-height: 1.4;
  font-size: 2.2rem;
`
export const HomeSubtitle = styled.small`
  font-weight: 800;
  display: block;

  ${respondTo.T900`
  line-height: normal;
  font-weight: 700;
  `}
`

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Hi, I'm Ricardo,
        <br />A full stack web developer.
        <HomeSubtitle>This is my portfolio.</HomeSubtitle>
      </HomeTitle>
      <Ricardo />
    </HomeContainer>
  )
}

export default Home
