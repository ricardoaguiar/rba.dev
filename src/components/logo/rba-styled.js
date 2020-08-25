import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"


export const RBA = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: auto .8em;
  background: transparent;
  font-size: 21px;
  align-self: center;

  ${respondTo.T900`
    margin: .5em auto;
  `}
`