import React, { useState, useRef } from "react"
import { HeaderContainer, HeaderNav, HeaderNavItem } from "./header-styles"
import Menu from "../../components/menu/menu"
import { useOnClickOutside } from "../../components/hooks"
import RbaLogo from "../logo/rba-logo"
import BurgerComponent from "../../components/burger/burger"
import GitHub from "../../components/social/github"

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <Menu open={open} setOpen={setOpen} />
      <HeaderContainer ref={node}>
        <HeaderNav>
          <HeaderNavItem>
            <RbaLogo />
          </HeaderNavItem>

          <HeaderNavItem>
            <BurgerComponent open={open} setOpen={setOpen} />
          </HeaderNavItem>

          <HeaderNavItem>
            <GitHub />
          </HeaderNavItem>
        </HeaderNav>
      </HeaderContainer>
    </>
  )
}

export default Header
