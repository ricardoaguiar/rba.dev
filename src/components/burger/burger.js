import React from "react"
import { bool, func } from "prop-types"
import { BurgerBtn } from "./burger-styled"

const BurgerComponent = ({ open, setOpen }) => {
  return (
    <BurgerBtn open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerBtn>
  )
}

BurgerComponent.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default BurgerComponent
