import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span data-content="About us" aria-hidden="true"></span>About us
      </a>
      <a href="/">
        <span data-content="Pricing" aria-hidden="true"></span>Pricing
      </a>
      <a href="/">
        <span data-content="Contact" aria-hidden="true"></span>Contact
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
