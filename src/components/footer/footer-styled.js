import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const FooterSection = styled.section`
  display: flex;
  flex-flow: row wrap;
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
export const FooterItem = styled.div`
  width: auto;
  text-align: center;
  padding: 0.5rem;
  margin: 0.3rem;
  outline: 1px solid orange;
`
export const FooterItemLabel = styled.p`
  margin: 1rem auto;
  width: 100%;
  font-size: 0.8rem;
  color: var(--rbadev-mono-1-hex);
  outline: 1px solid red;
`
