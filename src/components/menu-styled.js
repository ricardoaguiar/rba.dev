import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"

// mobile layout
export const MenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: var(--white);
  transform: ${({ open }) => (open ? "translateY(0px)" : "translateY(-100%)")};
  position: fixed;
  top: 50px;
  left: 0;
  transition: transform 220ms ease-in-out;
  align-content: center;
  text-transform: uppercase;
  z-index: 20;

  ${respondTo.T900`
      /* padding-top: 50px; */
      top: 0;
`}

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
    text-align: center;
    margin: 1em;

    & span {
      position: absolute;
      top: 0;
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
      color: var(--logo);
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

    ${respondTo.T900`
        text-align: left;
        left: 0;
    `}
  }
`
export const MenuList = styled.ul`
  display: flex;
  flex-flow: column;
  background: var(--white);
  list-style: none;
  margin: 0;

  & li::first-of-type {
    ${respondTo.T900`
      border-top: 1px solid var(--rbadev-border-mono);
    `}
  }

  & li {
    margin-left: 0;
    padding-left: 0;
    /* border-bottom: 1px solid var(--rbadev-border-mono); */

    ${respondTo.T900`
    padding-left: 2rem;
 `}
  }
  ${respondTo.T900`
    width: 100vw;
    padding-left: 4rem;
    margin: 0 auto;
 `}
`

export const Connect = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: var(--rbadev-duotone-5-hex);
  color: var(--rbadev-duotone-4-hex);
  border-bottom: 1px solid var(--rbadev-duotone-4-hex);
  margin: 0;
  text-align: center;

  ${respondTo.T900`
    /* width: calc(100vw - 70px); */
    width: 50vw;
    margin-left: 70px;
    align-self: flex-start;
  `}

  & h3 {
    margin: 0.5em;
    font-size: clamp(1em, 1.5em, 22px);
  }
`
