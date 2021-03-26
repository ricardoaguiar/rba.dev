import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

// mobile layout
export const MenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: var(--rise-1);
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-100%)")};
  position: fixed;
  transition: transform 220ms ease-in-out;
  text-transform: uppercase;
  z-index: 0;
  justify-content: center;

  ${respondTo.T900`
      /* width: calc(100vw - 90px); */
      top: 0;
`}

  a {
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05rem;
    color: var(--white);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    margin: auto;
    font-size: clamp(1rem, 8vw, 2.5rem); 
    line-height: 2;
    text-align: center;

    ${respondTo.T900`
     line-height: 1.6;
    `}



    & span {
      position: absolute;
      top: 0;
      overflow: hidden;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      transform: scale(1.1)
      -webkit-transition: -webkit-transform 225ms ease-in-out;
      transition: -webkit-transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out,
        -webkit-transform 225ms ease-in-out;
        border-bottom: 4px solid var(--rise-1);
    }

    & span::before {
      display: inline-block;
      content: attr(data-content);
      color: var(--rise-4);
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      -webkit-transition: -webkit-transform 225ms ease-in-out;
      transition: -webkit-transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out;
      transition: transform 225ms ease-in-out,
        -webkit-transform 225ms ease-in-out;
      text-decoration: none;
    }

    &:hover span {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    &:hover span::before {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    ${respondTo.T900`
        text-align: left;
        left: 0;
    `}
  }
`
export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto;

  & li {
    /* margin-left: 0;
    padding-left: 0; */
    /* border-bottom: 1px solid var(--white); */

    ${respondTo.T900`
      padding: .2rem .8rem;
      margin: .3rem 0;
 `}
  }
  ${respondTo.T900`
    margin: auto;
 `}
`

// export const Connect = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   background: var(--rbadev-duotone-5-hex);
//   color: var(--rbadev-duotone-4-hex);
//   border-bottom: 1px solid var(--rbadev-duotone-4-hex);
//   margin: 0;
//   text-align: center;

//   ${respondTo.T900`
//     /* width: calc(100vw - 70px); */
//     width: 50vw;
//     margin-left: 70px;
//     align-self: flex-start;
//   `}

//   & h3 {
//     margin: 0.5em;
//     font-size: clamp(1em, 1.5em, 22px);
//   }
// `
