import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"
import GitHub from "../../components/social/github"
import Burger from "../../components/burger/burger"
import Logo from "../../components/logo"
import { useOnClickOutside } from "../../components/hooks"
import Menu from "../../components/menu/menu"
import { BurgerMenu } from "../../components/menu/menu-styled"

const MAIN = styled.main`
  display: flex;
  flex-flow: column;
  max-width: 100vw;

  ${respondTo.T900`
   margin-left: 7%;
  `}
`
const Wrapper = ({ children }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <MAIN>
      {children}
      <Menu open={open} setOpen={setOpen} />
      <BurgerMenu ref={node}>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <GitHub />
      </BurgerMenu>
    </MAIN>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
