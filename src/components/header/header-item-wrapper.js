import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

const HeaderItemWrapper = styled.div`
  width: 100px;

  ${respondTo.T900`
    width: auto;
    margin: .5rem 0;
  `}
`

export default HeaderItemWrapper
