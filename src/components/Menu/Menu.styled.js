import styled from "styled-components"
import { respondTo } from "../../utils/_respondTo"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: whitesmoke;
  transform: ${({ open }) => (open ? "translateX(-45%)" : "")};
  height: 100vh;
  text-align: left;
  position: fixed;
  top: 0;
  left: 100%;
  transition: transform 300ms ease-in-out;
  border-left: 0.5px solid var(--rbadev-mono-4-hex);
  /* z-index: 100; */

  ${respondTo.sm`
  width: 100%;
  padding: 1rem 1rem;
  
  `}

  a {
    display: block;
    font-size: 3.8rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--rbadev-mono-4-hex);
    text-decoration: none;
    margin-left: 10rem;
    position: relative;
    overflow: hidden;
    line-height: 1.25;

    & span {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      -webkit-transition: -webkit-transform 225ms ease-in-out;
      transition: -webkit-transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out,
        -webkit-transform 225ms ease-in-out;
    }

    & span::before {
      display: inline-block;
      content: attr(data-content);
      color: var(--rbadev-duotone-3-hex);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      -webkit-transition: -webkit-transform 225ms ease-in-out;
      transition: -webkit-transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out,
        -webkit-transform 225ms ease-in-out;
      text-decoration: none;
    }

    &:hover span {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    &:hover span::before {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`
