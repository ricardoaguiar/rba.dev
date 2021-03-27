import React from 'react'
import PropTypes from 'prop-types'
import Nav from './common/nav'
import Footer from './common/footer'

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
