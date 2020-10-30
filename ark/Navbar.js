import React, { useState } from "react"
import styled from "styled-components"
import { respondTo } from "../utils/_respondTo"
import Logo from "./logo"

const Navigation = styled.nav`
  min-width: 4vw;
  max-height: 100vh;
  background-color: orange;
  margin: 0 auto;
  top: 0;
`
const NavItems = styled.ul`
  color: #012345;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-around;
`
const NavLinks = styled.li`
  text-decoration: underline;

  /* when it reaches 800px wide: */
  ${respondTo.M300`
    ${NavItems}:hover & {
      background-color: tomato;
    }
  `}
`

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect(() => {
  //   props.history.listen(() => {
  //     setIsMenuOpen(false)
  //   })
  // })

  return (
    <>
      <Navigation
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      >
        <NavItems>
          <Logo />
          <NavLinks>Projects</NavLinks>
          <NavLinks>About</NavLinks>
          <NavLinks>Contact</NavLinks>
          <NavLinks>
            <i className="fas fa-bars" />
          </NavLinks>
        </NavItems>
      </Navigation>
    </>
  )
}

export default Navbar
