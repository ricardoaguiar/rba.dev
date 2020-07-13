import styled from "styled-components"
import { respondTo } from "../../utils/_respondTo"

export const StyledMenu = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
  background: var(--rbadev-mono-2-hex);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 220ms ease-in-out;

  a {
    display: block;
    font-size: 3.8rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: var(--rbadev-mono-4-hex);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    line-height: 1.25;
    margin-left: 5rem;

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
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.menuLeft || ""};
  background: ${props => props.menuLeft || ""};
  list-style: none;
  height: 100vh;
  text-align: left;
  margin: 0;

  & li {
    font-size: 3rem;
    line-height: 2;
    margin: 0;
    padding-left: 2em;
  }

  & h1 {
    background: var(--rbadev-duotone-3-hex);
    color: var(--rbadev-duotone-4-hex);
    align-items: center;
    margin: 0;
    width: 100%;
    padding: 9rem 2em;
  }
`
export const Contact = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 2vh;
  list-style: none;
`
