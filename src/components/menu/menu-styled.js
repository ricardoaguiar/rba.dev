import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const BurgerMenu = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--rbadev-mono-1-hex);
  min-height: 8vh;
  width: 100vw;
  z-index: 200;
  border-bottom: 2px solid var(--rbadev-duotone-3-hex);
  /* outline: 3px dotted skyblue; */
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 91.5vh;
  background: var(--rbadev-mono-1-hex);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  position: absolute;
  top: 8.4vh;
  left: 0;
  transition: transform 220ms ease-in-out;
  align-content: center;
  text-transform: uppercase;
  z-index: 10;
  /* border-top: 2px solid var(--rbadev-duotone-3-hex); */

  a {
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05rem;
    color: var(--rbadev-mono-4-hex);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    line-height: clamp(0.8, 1, 1.5);
    text-align: left;
    margin: 1em;

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
  display: flex;
  flex-flow: column;
  flex: 0 1 50%;
  list-style: none;
  margin: 0;

  & li {
    font-size: 1em;
    line-height: 4;
    margin: 0;
    padding-left: 2em;
    border-bottom: 1px solid var(--rbadev-border-mono);
  }
`

export const Connect = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  background: var(--rbadev-duotone-3-hex);
  color: var(--rbadev-duotone-4-hex);
  border-bottom: 1px solid var(--rbadev-border-mono);
  margin: 0;
  text-align: center;

  & h3{
    margin: .5em;
    font-size: clamp(1em, 1.5em, 22px)
  }
}
`

export const SocialMediaList = styled.ul`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  flex: 1 100%;
  width: 100vw;
  list-style: none;
  margin: 0 auto;

  & li {
    justify-content: space-between;
  }

  ${respondTo.M300`
  background: var(--rbadev-duotone-3-hex);
  `};
`

export const Contact = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 0 1px 0;
  width: 100vw;
  justify-content: space-around;
  padding: 0;
  border-top: 1px solid var(--rbadev-border-mono);
  border-bottom: 1px solid var(--rbadev-border-mono);
  bottom: 0;
  position: fixed;

  & li {
    padding: 1vw;
    margin: 0;
    border: none;
    width: 100%;
    text-align: center;
    border-right: 1px solid var(--rbadev-mono-2-hex);
  }
  & li:nth-of-type(3) {
    border-right: none;
  }
`
