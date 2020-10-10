import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

// mobile layout
export const MenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: var(--rbadev-mono-1-hex);
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-100%)")};
  position: fixed;
  top: 50px;
  left: 0;
  transition: transform 220ms ease-in-out;
  align-content: center;
  text-transform: uppercase;

  ${respondTo.T900`
      padding-top: 50px;
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
    margin-left: 3rem;
    padding-left: 2em;
    border-bottom: 1px solid var(--rbadev-border-mono);
  }
`

export const Connect = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  background: var(--rbadev-duotone-5-hex);
  color: var(--rbadev-duotone-4-hex);
  /* border-bottom: 1px solid var(--rbadev-border-mono); */
  margin: 0;
  text-align: center;

  & h3 {
    margin: 0.5em;
    font-size: clamp(1em, 1.5em, 22px);
  }
`

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 0 100%;
  flex-wrap: wrap;
  width: 100vw;
  list-style: none;
  margin: 0 auto;

  & li {
    width: 40vw;
    outline: 1px solid greenyellow;
    margin: 0;
    padding: 0 1em;
    border-bottom: 1px solid var(--rbadev-border-mono);
  }
  & li:last-of-type {
    width: 100vw;
  }

  /* desktop layout */
  ${respondTo.T900`
    flex-direction: row;
  `}
`

export const Contact = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100vw;
  margin-left: -0.01em;
  padding: 0;
  font-size: 2.5vh;

  ${respondTo.T900`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    list-style: none;
    margin: 0 0 1px 0;
    height: 5vh;
  `};

  ${respondTo.T900`
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  `};
`
