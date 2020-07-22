import styled from "@emotion/styled"

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 30;
  grid-area: 1/2/1/3;
  margin: 0 auto;
  align-self: center;

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
`
