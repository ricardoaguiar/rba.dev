import React from "react"
import { bool, func } from "prop-types"
import { BurgerBtn } from "./burger-styled"

const BurgerComponent = ({ open, setOpen }) => {
  return (
    <BurgerBtn open={open} onClick={() => setOpen(!open)}>
      {/* <svg viewBox="0 0 100 80" width="40" height="40">
        <rect x="20" width="60" height="8" rx="1"></rect>
        <rect x="5" y="30" width="90" height="8" rx="1"></rect>
        <rect x="20" y="60" width="60" height="8" rx="1"></rect>
      </svg> */}
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
