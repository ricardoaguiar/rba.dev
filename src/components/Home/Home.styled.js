import styled from "styled-components"
import { respondTo } from "../../utils/_respondTo"

export const HomeContainer = styled.section`
  min-height: calc(100vmax - 30%);
  min-width: 80vw;
  background-color: #f444;
  display: flex;
  margin: 0 auto;
`
export const HomeItem = styled.article`
  display: flex;
  flex-wrap: wrap;
  background-color: teal;
  color: #ccc;
  margin: 0;
  padding: 4rem 2rem;

  ${respondTo.xs`
  background-color: white;
  margin: 0 auto;
  max-width: 85vw;
  padding: 5vh 5vw;
`};

  ${respondTo.sm`
  // full width
  background: blue;
  margin: 5vw auto;
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
