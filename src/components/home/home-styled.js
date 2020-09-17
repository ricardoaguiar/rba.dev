import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const HomeContainer = styled.section`
  min-height: calc(100vmax - 30%);
  display: flex;
  flex: 1 0 auto;
  margin: 50px auto 0;
  text-transform: uppercase;
//   background: var(--rbadev-mono-2-hex);
background: red;

  ${respondTo.T900`
    max-width: calc(100vw - 7%);
    margin: 0 auto;

  `}
`
export const HomeItem = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 4rem 2rem;

  ${respondTo.T900`
  background-color: white;
  margin: 0 auto;
  padding: 5vh 5vw;
`}
`

export const HomeTitle = styled.h1`
  line-height: 1;
  font-size: calc(6vw - 60%);
`
export const HomeSubtitle = styled.h2`
  line-height: calc(10vw - 70%);
  font-size: calc(6vw - 70%);
  font-weight: 800;

  ${respondTo.T900`
  line-height: normal;
  font-weight: 700;
  `}
`
