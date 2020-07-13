import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Wrapper = ({ children }) => {
  return <main>{children}</main>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
