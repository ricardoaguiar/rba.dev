import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

//header is the container for the navigation
export const HeaderContainer = styled.header`
  /* background: var(--rbadev-mono-1-hex);
   border-bottom: 1px solid var(--rbadev-duotone-2-hex);  */
  background: grey;
  display: flex;
  flex-flow: row;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 50px;
  width: 100vw;
  margin: 0;

  ${respondTo.T900`
    min-height: 100vh;
    // border-right: 1px solid var(--rbadev-duotone-2-hex); 
    max-width: 70px;
    flex-flow: column;
    padding: 0;
    margin: 0;
  `}
`
// export const BurgerMenu = styled.nav`
//   align-items: center;
//   left: 0;
//   top: 0;
//   background: var(--rbadev-mono-2-hex);

// `
