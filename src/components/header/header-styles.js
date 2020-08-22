import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

export const HeaderContainer = styled.header`
  background: #fa4;
  min-width: 100vw;
  height: 70px;
  border-bottom: 2px solid var(--rbadev-duotone-2-hex); 
`
export const BurgerMenu = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--rbadev-mono-2-hex);
  height: 50px;
  width: 100vw;

  ${respondTo.T900`
    display: flex;
    min-height: 100vh;
    max-width: 7%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: none;
    padding: 0;
    margin: 0;
  `}
`