import React from "react"
import { bool } from "prop-types"
import { StyledMenu, MenuList, Contact } from "./Menu.styled"
import Social from "../Social/SocialMediaMenu"

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
        <MenuList menuLeft="var(--rbadev-mono-1-hex)">
          <h1>Connect</h1>
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
