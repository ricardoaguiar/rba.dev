import React from 'react'
import { bool } from 'prop-types'
import { MenuNavigation, MenuList, Connect } from './menu-styled'
import SocialMediaMenu from './SocialMedia'
import Link from './link'

const Menu = ({ open }) => {
  return (
    <>
      <MenuNavigation open={open}>
        <MenuList>
          <li>
            <Link to='/'>
              <span
                data-content='Projects'
                aria-hidden='true'
                aria-label='Project'
              />
              Projects
            </Link>
          </li>
          <li>
            <Link to='/recommendations/'>
              {/* <span
                data-content="Recommendations"
                aria-hidden="true"
                aria-label="Recommendations"
              ></span> */}
              Recommendations
            </Link>
          </li>
          <li>
            <Link to='/about/'>
              {/* <span
                data-content="About Me"
                aria-hidden="true"
                aria-label="About Me"
              ></span> */}
              About Me
            </Link>
          </li>
          <li>
            <Link to='/contact/'>
              {/* <span
                data-content="Contact"
                aria-hidden="true"
                aria-label="Contact"
              ></span> */}
              Contact
            </Link>
          </li>
          <li>
            <Link to='/blog/'>
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

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
