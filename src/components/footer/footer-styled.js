import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  background: var(--rbadev-mono-4-hex);
  margin: 0 auto;
  box-sizing: border-box;

  ${respondTo.T900`
    width: calc(100vw - 70px);
    margin-left: 70px
`}
`
export const FooterItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin: 0 auto;
  /* outline: 2px solid orange; */

  ${respondTo.T900`
    padding: 0.5rem;
    max-width: 50vw;
 `}
`
export const FooterItem = styled.li`
  align-items: center;
  width: auto;
  padding: 0.5rem;
  /* outline: 1px solid blueviolet; */

  ${respondTo.T900`
  padding: 1rem;
  `}

  &:first-child {
    letter-spacing: 0.5mm;
    font-family: bio-sans;
    font-size: 0.8rem;
    font-weight: bolder;
    text-transform: uppercase;
    color: var(--rbadev-mono-1-hex);
    padding: 0;
    margin-bottom: 0.2rem;
    width: 100%;
    /* outline: 1px solid white; */

    ${respondTo.T900`
      margin-bottom: -0.2rem;
    `}
  }
`

export const FooterItemLabel = styled.p`
  margin: 1rem auto;
  width: auto;
  font-size: 0.8rem;
  color: var(--rbadev-mono-1-hex);
  display: inline-block;
  /* outline: 1px solid red; */
`
