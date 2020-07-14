import React from "react"
import { bool } from "prop-types"
import { StyledMenu, MenuList, Contact, Connect } from "./menu-styled"

const Menu = ({ open }) => {
  return (
    <>
      <StyledMenu open={open}>
        <MenuList menuLeft="center">
          <li>
            <a href="/">
              <span data-content="About us" aria-hidden="true"></span>About us
            </a>
          </li>
          <li>
            <a href="/">
              <span data-content="Pricing" aria-hidden="true"></span>Pricing
            </a>
          </li>
          <li>
            <a href="/">
              <span data-content="Contact" aria-hidden="true"></span>Contact
            </a>
          </li>
        </MenuList>
        <Connect>Connect</Connect>
        <MenuList menuLeft="var(--rbadev-mono-1-hex)">
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>
            <Contact>
              <li>email</li>
              <li>phone</li>
              <li>message</li>
            </Contact>
          </li>
        </MenuList>
      </StyledMenu>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
