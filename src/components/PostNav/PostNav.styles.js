import styled from '@emotion/styled'
import { respondTo } from '../../utils/_respondTo'

// grid
export const GridContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-template-rows: 1fr; */
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
     margin-bottom: 8vh;
  `}
`
// grid item / cell
export const GridItem = styled.div`
  background: transparent;
  /* outline: 2px solid green; */
`
// grid content
export const GridPicture = styled.div`
  overflow: hidden;
  position: relative;
  /* outline: 1px solid red; */
`
// img caption
export const GridCaption = styled.div`
  width: 80%;
  /* outline: 1px solid red; */
  margin: auto 2rem;

  & h3 {
    /* text-decoration: underline solid var(--rise-4);
    text-decoration-thickness: 2px; */
    color: var(--rise-2);
    margin: 0;
  }
  & p {
    font-size: 0.8rem;
    /* max-width: 80%; */
  }
`
export const ViewProject = styled.span`
  margin-left: 1rem;
`
export const Projects = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
  color: var(--rise-2);

  ${respondTo.T900`
     padding-left: 90px;
  `}
`
