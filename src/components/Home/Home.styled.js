import styled from "styled-components"
import { respondTo } from "../../utils/_respondTo"

export const HomeContainer = styled.section`
  min-height: 100vh;
  min-width: 80vw;
  background-color: var(--rbadev-mono-4-hex);
  display: flex;
`
export const HomeItem = styled.article`
  display: flex;
  flex-wrap: wrap;
  background-color: whitesmoke;
  color: #ccc;
  margin: 0;
  padding: 4rem 2rem;

  ${respondTo.xs`
  min-height: calc(100vh - 24vh);
  background-color: #ABBD1355;
  margin: 0 auto;
  border: solid 1px #123456;
  max-width: 85vw;
  padding: 5vh 5vw;
`};

  ${respondTo.sm`
  background-color: #66778866;
  margin: 5vw auto;
  border: solid 1px #123456;
  max-width: 85vw;
  padding: 5vh 5vw;
  color: whitesmoke;
`};
`

export const HomeTitle = styled.h1`
  line-height: normal;
  font-size: 8vw;
`
export const HomeSubtitle = styled.h2`
  line-height: 10vh;
  font-size: 9vw;
  font-weight: 800;

  ${respondTo.md`
  line-height: normal;
  font-weight: 700;
  font-size: 7vw
  `}

  ${respondTo.lg`
  line-height: normal;
  font-weight: 700;
  font-size: 7vw
  `}
`
