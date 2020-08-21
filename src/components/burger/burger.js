import React from "react"
import { bool, func } from "prop-types"
import { BurgerButton } from "./burger-styled"

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <BurgerButton open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerButton>
  )
}

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default BurgerMenu
