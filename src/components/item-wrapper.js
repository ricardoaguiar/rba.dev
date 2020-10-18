import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"

const ItemWrapper = styled.div`
  display: flex;
  width: 50px;
  margin: 0.5rem 0;
  outline: 1px solid red;
  text-align: right;

  ${respondTo.T900`
    width: auto;
    outline: 1px solid blue;
  `}
`

export default ItemWrapper
