import styled from "@emotion/styled"
import { respondTo } from "../src/utils/_respondTo"

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  background: var(--rbadev-mono-4-hex);
  margin: 0 auto;
  box-sizing: border-box;

  ${respondTo.T900`
    width: calc(100% - 70px);
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
  color: #fff;

  ${respondTo.T900`
    margin: 1rem;
  `}
`

export const FooterItemLabel = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.5mm;
  margin: 1rem auto;
  font-weight: bolder;
  font-family: bio-sans;
  width: auto;
  font-size: 0.8rem;
  margin-bottom: -0.5rem;
  color: var(--rbadev-mono-1-hex);
  /* display: inline-block; */
  /* outline: 1px solid red; */
`
