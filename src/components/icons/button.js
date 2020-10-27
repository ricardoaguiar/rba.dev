import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const Button = styled.a`
  display: inline-flex;

  ${respondTo.T900`
    margin: 1rem auto;
  `}
`

export const GitHubHeaderBtn = styled.a`
  z-index: 10;
  display: inline-flex;

  ${respondTo.T900`
    margin: 0 auto;
  `}
`
