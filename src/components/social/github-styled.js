import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"


export const GitHubButton = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  grid-area: 1/3/1/-1;
  margin-right: 1em;
  justify-content: flex-end;
  background: transparent;
  font-size: 0.7em;

  ${respondTo.T900`
   margin-bottom: 1em;
  `}
`
