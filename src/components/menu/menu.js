import React from "react"
import { bool } from "prop-types"
import { MenuNavigation, MenuList, Connect } from "./menu-styled"

import SocialMediaMenu from "../social/social-media-menu"

const Menu = ({ open }) => {
  return (
    <>
      <MenuNavigation open={open}>
        <MenuList>
          <li>
            <a href="/about/">
              <span data-content="About us" aria-hidden="true"></span>About
            </a>
          </li>
          <li>
            <a href="/">
              <span data-content="Pricing" aria-hidden="true"></span>Services
            </a>
          </li>
          <li>
            <a href="/">
              <span data-content="Contact" aria-hidden="true"></span>Contact
            </a>
          </li>
        </MenuList>
        <Connect>
          <h3>Connect</h3>
        </Connect>
        <SocialMediaMenu />
      </MenuNavigation>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
