import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"


export const GitHubButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 1em;
  background: transparent;
  font-size: 19px;

  ${respondTo.T900`
   margin: .8em auto;

  `}
`
