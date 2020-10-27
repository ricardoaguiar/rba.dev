import React from "react"
import { bool, func } from "prop-types"
// import { BurgerBtn } from "./burger-styled"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"

// this is the BurgerBtn element
export const BurgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 30;
  margin: 0 auto;
  align-self: center;

  ${respondTo.T900`
        padding: 0;
    `}

  &:focus {
    outline: none;
  }

  div {
    width: 25px;
    height: 2px;
    background: ${({ open }) =>
      open ? "var( --logo)" : "var(--rbadev-mono-4-hex)"};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateY(0px)" : "translateX(0)")};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export default function BurgerComponent({ open, setOpen }) {
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

// export default BurgerComponent
