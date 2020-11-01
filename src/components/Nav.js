import React, { useState, useRef } from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Menu from "./menu"
import { useOnClickOutside } from "./hooks/hooks"
import RbaLogo from "./logo/rba-logo"
import BurgerComponent from "./Burger"
import { FaEnvelope } from "react-icons/fa"

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
  border-bottom: 1px solid var(--logo);
  z-index: 100;

  ${respondTo.T900`
    min-height: 100vh;
    border-right: 1px solid var(--logo); 
    max-width: 70px;
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
    max-width: 70px;
    height: calc(100vh - 4%);
  `}
`
export const HeaderNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 50px;

  ${respondTo.T900`
    width: unset;
    margin: .7rem auto;

  `}

  &:last-child {
    justify-content: flex-end;
  }
`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <Menu open={open} setOpen={setOpen} />
      <NavComponent ref={node}>
        <HeaderNav>
          <HeaderNavItem>
            <RbaLogo />
          </HeaderNavItem>
          <HeaderNavItem>
            <BurgerComponent open={open} setOpen={setOpen} />
          </HeaderNavItem>
          <HeaderNavItem>
            <FaEnvelope size={28} />
          </HeaderNavItem>
        </HeaderNav>
      </NavComponent>
    </>
  )
}

// export default Header
