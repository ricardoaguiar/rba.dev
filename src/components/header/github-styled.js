import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const GitHubButton = styled.a`
  z-index: 10;
  display: inline-flex;

  ${respondTo.T900`
   margin: .8em auto;

  `}
`
