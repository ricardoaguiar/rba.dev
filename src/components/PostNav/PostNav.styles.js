import styled from "@emotion/styled"
import { respondTo } from "../../utils/_respondTo"

// grid
export const GridContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  padding: 5vh 5vw;
  background: var(--rise-8);
  height: auto;
  position: relative;

  ${respondTo.M400`
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    `}
  ${respondTo.T900`
     grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
     margin-left: 90px;
  `}
`
// grid item / cell
export const GridItem = styled.div`
  background: transparent;
  z-index: -999;
`
// grid content
export const GridPicture = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid var(--rise-7);

  &:hover {
    border-color: var(--rise-2);
  }
`
// img caption
export const GridCaption = styled.div`
  padding: 10px 0 10px 20px;
  width: 100%;
  background-color: var(--rise-7);

  & h3 {
    text-decoration: underline solid var(--rise-4);
    text-decoration-thickness: 2px;
    color: var(--rise-2);
    margin: 0;
  }
  & p {
    font-size: 0.8rem;
    max-width: 95%;
  }
`
export const PostDescription = styled.span`
  margin: 0 3rem 1rem 1rem;
  bottom: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const Projects = styled.div`
  font-size: 2rem;
  width: calc(100% - 90px);
  text-align: center;
  margin: 2rem 0 0 90px;
  color: var(--rise-2);
`
