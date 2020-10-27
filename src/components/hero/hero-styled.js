import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"
// import ricardo from "../../images/ricardo.png"

export const HomeContainer = styled.header`
  min-height: calc(100vmax - 30%);
  display: flex;
  flex: 1 0 auto;
  margin: 50px auto 0;
  text-transform: uppercase;
  background-image: url(data:image/ricardo.cutout.png);
  padding: 4rem 2rem;

  ${respondTo.T900`
    max-width: calc(100vw - 70px);
    margin-left: 70px;
    margin-top: 0;
    padding: 5vh 5vw;
  `};
`

export const HomeTitle = styled.h1`
  line-height: 1;
  font-size: calc(6vw - 60%);
`
export const HomeSubtitle = styled.small`
  line-height: calc(10vw - 70%);
  font-size: calc(6vw - 70%);
  font-weight: 800;
  display: block;

  ${respondTo.T900`
  line-height: normal;
  font-weight: 700;
  `}
`
