import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

const Main = styled.main`
  /* display: flex; */
  /* flex-flow: column; */
  /* max-width: 100vw; */

  /* ${respondTo.T900`
   margin-left: 7%;
  `} */
`
const Wrapper = ({ children }) => {
  return <Main>{children}</Main>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
