import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Wrapper = ({ children }) => {
  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
