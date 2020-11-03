import React from "react"
import styled from "@emotion/styled"
import css from "@emotion/css"
import { respondTo } from "../utils/_respondTo"

export const HomeContainer = styled.header`
  display: flex;
  flex: 1 0 auto;
  margin: 110px 5vw auto;
  padding: 0;
  color: var(--rbadev-mono-4-hex);

  ${respondTo.T900`
    max-width: calc(100vw - 70px);
    margin-left: 70px;
    margin-top: 0;
    padding: 1vh 0 0 5vw;
    height: 50vh;
    background: #ffffff;
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
        Hi, I'm Ricardo.
        <br />
        <span
          css={css`
            color: var(--logo);
          `}
        >
          Front End web developer
        </span>
        &nbsp;with a strong interest in Full-stack and System Integrations.
        <HomeSubtitle>
          These are some of the projects I have built.
        </HomeSubtitle>
      </HomeTitle>
    </HomeContainer>
  )
}

export default Home
