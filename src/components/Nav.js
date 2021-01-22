import React, { useState, useRef } from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Menu from "./menu"
import { useOnClickOutside } from "./hooks/hooks"
import RbaLogo from "./logo/rba-logo"
import BurgerComponent from "./Burger"
// import SocialMediaMenu from "./SocialMedia"
import {
  // FaEnvelope,
  // FaGrinStars,
  FaGithubSquare,
  FaLinkedin,
  // FaComments,
  // FaRegThumbsUp,
  // FaWordpress,
  // FaCogs,
  // FaUser,
} from "react-icons/fa"
import { Link } from "gatsby"

export const NavComponent = styled.nav`
  background: var(--white);
  display: flex;
  flex-flow: row;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 50px;
  width: 100vw;
  margin: 0;
  z-index: 100;
  background: var(--rise-4);

  ${respondTo.T900`
    min-height: 100vh;
    max-width: 90px;
    flex-flow: column;
    padding: 0;
    margin: 0;
    z-index: 999;
  `}
`
export const HeaderNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  justify-content: space-between;
  width: calc(100vw - 6%);

  ${respondTo.T900`
    display: flex;
    flex-flow: column;
    flex: 1 0 auto;
    align-items: center;
    max-width: 90px;
    height: calc(100vh - 10%);

  `}
`
export const HeaderNavItem = styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 50px;

  ${respondTo.T900`
    width: unset;
    margin: .7rem auto;

  `}
`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <NavComponent ref={node}>
      <Menu open={open} setOpen={setOpen} />
      <HeaderNav>
        <HeaderNavItem>
          <RbaLogo />
        </HeaderNavItem>
        <BurgerComponent open={open} setOpen={setOpen} />
        {/* <HeaderNavItem>
          <Link to="/about/">
            <FaUser size={24} />
          </Link>
        </HeaderNavItem> */}
        <HeaderNavItem>
          <Link to="/">
            <FaLinkedin size={24} />
          </Link>
          <Link to="/">
            <FaGithubSquare size={24} />
          </Link>
        </HeaderNavItem>
      </HeaderNav>
    </NavComponent>
  )
}
