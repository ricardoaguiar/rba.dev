import React from "react"
import { bool } from "prop-types"
import { StyledNav, MenuList, Connect, SocialMediaList } from "./menu-styled"

import SocialMediaMenu from "../social/social-media-menu"

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
        </MenuList>
        <Connect>
          <h3>Connect</h3>
        </Connect>
        {/* <SocialMediaList>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#" id="">
              phone
            </a>
          </li>
          <li>
            <a href="#">message</a>
          </li>
          <li>
            <a href="mailto:rba@rba.dev">email</a>
          </li>
        </SocialMediaList> */}
        <SocialMediaMenu />
      </StyledNav>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
