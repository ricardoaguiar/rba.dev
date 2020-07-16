import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const HomeContainer = styled.section`
  min-height: calc(100vmax - 30%);
  min-width: 100vw;
  display: flex;
  margin: 0 auto;
  text-transform: uppercase;
  background: var(--rbadev-mono-3-hex);
`
export const HomeItem = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 4rem 2rem;

  ${respondTo.xs`
  background-color: white;
  margin: 0 auto;
  max-width: 85vw;
  padding: 5vh 5vw;
`};

  ${respondTo.sm`
  background: var(--rbadev-mono-3-hex);
  margin: 0 auto;
  max-width: 85vw;
  padding: 5vh 5vw;
  color: whitesmoke;
`};
`

export const HomeTitle = styled.h1`
  line-height: 1;
  font-size: calc(8vw - 40%);
`
export const HomeSubtitle = styled.h2`
  line-height: calc(9vw - 60%);
  font-size: calc(6vw - 45%);
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
