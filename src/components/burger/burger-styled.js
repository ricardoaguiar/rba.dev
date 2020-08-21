import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 30;
  grid-area: 1/2/1/3;
  margin: 0 auto;
  align-self: center;

  /* width after 900px and above  */
  ${respondTo.T900`
    width: 2rem;
    height: 1.6rem;
`}

  &:focus {
    outline: none;
  }

  div {
    width: 1.6rem;
    height: 0.1rem;
    background: ${({ open }) =>
      open ? "var( --rbadev-duotone-3-hex)" : "var(--rbadev-mono-4-hex)"};
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

 ${respondTo.T900`
    width: 2rem;
 `}

`
