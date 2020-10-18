import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const FooterSection = styled.section`
  justify-content: center;
  width: calc(100vw - 70px);
  min-height: 20vh;
  background: var(--rbadev-mono-4-hex);
  margin: 0 auto;
  padding: 4rem 8rem;
  bottom: 0;
  box-sizing: border-box;

  ${respondTo.T900`
    margin-left: 70px;
`}
`
export const FooterItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  text-align: center;
  padding: 0.5rem;
  margin: 0 auto;
  max-width: 50vw;
  /* outline: 2px solid orange; */
`
export const FooterItem = styled.li`
  align-items: center;
  padding: 1rem;
  width: auto;
  /* outline: 1px solid blueviolet; */

  &:first-child {
    letter-spacing: 0.5mm;
    font-family: bio-sans;
    font-size: 1rem;
    font-weight: bolder;
    text-transform: uppercase;
    color: var(--rbadev-mono-1-hex);
    padding: 0;
    width: 100%;
    /* outline: 1px solid white; */
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
