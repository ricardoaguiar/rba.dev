import React from "react"
import styled from "@emotion/styled"
import css from "@emotion/css"
import { respondTo } from "../utils/_respondTo"

export const HomeContainer = styled.header`
  display: flex;
  flex: 1 0 auto;
  margin: 110px 5vw auto;
  padding: 0;
  color: var(--rba-9);
  background: var(--rise-1);

  ${respondTo.T900`
    width: calc(100% - 90px);
    margin-left: 90px;
    margin-top: 0;
    height: 50vh;
    align-items: center;
  `};
`

export const HomeTitle = styled.h1`
  line-height: 1.4;
  font-size: 2.2rem;
  margin: 0 auto;

  ${respondTo.T900`
    width: 70%;
  `}
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
    <>
      <HomeContainer>
        <HomeTitle>
          Hi, my name is Ricardo.
          <br />
          <span
            css={css`
              color: var(--rise-4);
            `}
          >
            I'm a JavaScript Full Stack Web Developer.
          </span>
          &nbsp;
          <HomeSubtitle>
            These are some of the projects I have worked on.
          </HomeSubtitle>
        </HomeTitle>
      </HomeContainer>
    </>
  )
}

export default Home
