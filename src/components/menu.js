import React from "react"
import { bool } from "prop-types"
import { MenuNavigation, MenuList, Connect } from "./menu-styled"
import SocialMediaMenu from "./SocialMedia"
import { Link } from "gatsby"

const Menu = ({ open }) => {
  return (
    <>
      <MenuNavigation open={open}>
        <MenuList>
          <li>
            <Link to="/">
              <span data-content="Projects" aria-hidden="true"></span>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/recommendations/">
              <span data-content="Recommendations" aria-hidden="true"></span>
              Recommendations
            </Link>
          </li>
          <li>
            <Link to="/about/">
              <span data-content="About Me" aria-hidden="true"></span>About Me
            </Link>
          </li>
          <li>
            <Link to="/contact/">
              <span data-content="Contact" aria-hidden="true"></span>Contact
            </Link>
          </li>
          <li>
            <Link to="/blog/">
              <span data-content="Blog" aria-hidden="true"></span>Blog
            </Link>
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
