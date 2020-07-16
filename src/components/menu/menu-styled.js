import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const BurgerMenu = styled.header`
  left: 0;
  top: 0;
  position: fixed;
  background: var(--rbadev-mono-1-hex);
  height: 8vh;
  width: 100vw;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  outline: 1px solid blue;
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  /* grid-template-columns: 1fr; */
  /* grid-gap: 0; */
  /* grid-auto-rows: 0.5fr; */
  background: var(--rbadev-mono-3-hex);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 220ms ease-in-out;
  align-content: center;
  text-transform: uppercase;

  a {
    display: block;
    font-size: calc(1.5em - 10%);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: var(--rbadev-mono-4-hex);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    line-height: 1;
    text-align: right;
    margin: 1.2em;

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
  }
`
export const MenuList = styled.ul`
  /* display: flex; */
  /* flex-direction: column; */
  justify-content: ${props => props.menuLeft || ""};
  background: ${props => props.menuLeft || ""};
  list-style: none;
  min-height: 40vh;
  text-align: left;
  margin: 0;
  border: 1px solid tomato;

  & li {
    font-size: 1em;
    line-height: 2;
    margin: 0;
    padding-left: 2em;
  }
`
export const Connect = styled.h1`
  display: flex;
  flex-direction: row;
  background: var(--rbadev-duotone-3-hex);
  color: var(--rbadev-duotone-4-hex);
  margin: 0;
  max-width: 100%;
  padding: 0.5em;
`
export const Contact = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 2vh;
  list-style: none;
  padding-top: 2em;
  margin-left: -5em;
  border: 1px solid black;
  max-width: 100%;
`
