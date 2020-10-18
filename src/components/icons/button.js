import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const Button = styled.a`
  display: inline-flex;

  ${respondTo.T900`
   /* margin: .8em auto; */

  `}
`
