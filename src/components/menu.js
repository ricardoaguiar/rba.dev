import React from "react"
// import { bool } from 'prop-types'
import { MenuNavigation, MenuList } from "./menu-styled"
// import SocialMediaMenu from "./SocialMedia"
import Link from "./link"
// import { Link } from "gatsby"

const Menu = ({ open }) => {
  return (
    <>
      <MenuNavigation open={open}>
        <MenuList>
          <li>
            <Link to="/">
              <span
                data-content="Projects"
                aria-hidden="true"
                aria-label="Project"
              />
              Projects
            </Link>
          </li>
          {/* <li>
            <Link to="/recommendations/">
              <span
                data-content="Recommendations"
                aria-hidden="true"
                aria-label="Recommendations"
              />
              Recommendations
            </Link>
          </li> */}
          <li>
            <Link to="/about/">
              <span
                data-content="About"
                aria-hidden="true"
                aria-label="About"
              />
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/">
              <span
                data-content="Contact Me"
                aria-hidden="true"
                aria-label="Contact Me"
              />
              Contact Me
            </Link>
          </li>
        </MenuList>
      </MenuNavigation>
    </>
  )
}

// Menu.propTypes = {
//   open: bool.isRequired
// }

export default Menu
