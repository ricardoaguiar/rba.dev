import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"

const ItemWrapper = styled.div`
  width: 100px;
  margin: 0.5rem 0;

  ${respondTo.T900`
    width: auto;
  `}
`

export default ItemWrapper
