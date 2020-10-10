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
            <a href="/">
              <span
                data-content="What can I do for you?"
                aria-hidden="true"
              ></span>
              What can I do for you?
            </a>
          </li>
          <li>
            <a href="/about/">
              <span data-content="About Me" aria-hidden="true"></span>About Me
            </a>
          </li>
          <li>
            <a href="/">
              <span data-content="Contact" aria-hidden="true"></span>Contact
            </a>
          </li>
          <li>
            <a href="/blog/">
              <span data-content="Blog" aria-hidden="true"></span>Blog
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
