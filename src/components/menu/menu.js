import React from "react"
import { bool } from "prop-types"
import {
  StyledNav,
  MenuList,
  Contact,
  Connect,
  SocialMediaList,
} from "./menu-styled"

// import SocialMediaMenu from "../social/social-media-menu"

const Menu = ({ open }) => {
  return (
    <>
      <StyledNav open={open}>
        <MenuList>
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
          <li>
            <a href="/">
              <span data-content="Contact" aria-hidden="true"></span>Contact
            </a>
          </li>
        </MenuList>
        <Connect>
          <h3>Connect</h3>
        </Connect>
        <SocialMediaList>
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
        </SocialMediaList>
      </StyledNav>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
