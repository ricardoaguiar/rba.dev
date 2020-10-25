import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

//header is the container for the navigation
export const HeaderContainer = styled.nav`
  background: var(--rbadev-mono-1-hex);
  display: flex;
  flex-flow: row;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 50px;
  width: 100vw;
  margin: 0;
  border-bottom: 1px solid var(--rbadev-mono-2-hex);
  z-index: 100;

  ${respondTo.T900`
    min-height: 100vh;
    border-right: 1px solid var(--rbadev-mono-2-hex); 
    max-width: 70px;
    flex-flow: column;
    padding: 0;
    margin: 0;
    z-index: 999;
  `}
`
export const HeaderNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  justify-content: space-between;
  width: calc(100vw - 6%);

  ${respondTo.T900`
    display: flex;
    flex-flow: column;
    flex: 1 0 auto;
    align-items: center;
    max-width: 70px;
    height: calc(100vh - 4%);
  `}
`
export const HeaderNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 50px;
  /* outline: 1px solid red; */

  ${respondTo.T900`
    width: unset;

  `}

  &:last-child {
    justify-content: flex-end;
  }
`
