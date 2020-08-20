import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import { respondTo } from "../../utils/_respondTo"

import "./styles.css"


const MAIN = styled.main`
  display: flex;
  flex-flow: column;
  max-width: 100vw;

  ${respondTo.T900`
   margin-left: 7%;
  `}

`



const Wrapper = ({ children }) => {
  return <MAIN>{children}</MAIN>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
