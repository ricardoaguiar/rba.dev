import React from "react"
// import { bool } from 'prop-types'
import { MenuNavigation, MenuList, Connect } from "./menu-styled"
import SocialMediaMenu from "./SocialMedia"
// import Link from "./link"
import { Link } from "gatsby"

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
          <li>
            <Link to="/recommendations/">
              {/* <span
                data-content="Recommendations"
                aria-hidden="true"
                aria-label="Recommendations"
              ></span> */}
              Recommendations
            </Link>
          </li>
          <li>
            {/* <span
              data-content="About Me"
              aria-hidden="true"
              aria-label="About Me"
            ></span> */}
            <Link to="/about/">About Me</Link>
            {console.log(Link)}
          </li>
          <li>
            <Link to="/blog/">
              {/* <span
                data-content="Blog"
                aria-hidden="true"
                aria-label="Blog"
              ></span> */}
              Blog
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

// Menu.propTypes = {
//   open: bool.isRequired
// }

export default Menu
