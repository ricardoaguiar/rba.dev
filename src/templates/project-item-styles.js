import styled from '@emotion/styled'
import { respondTo } from '../utils/_respondTo'

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 5vw;
  line-height: 1.5;
  margin: auto 0;

  ${respondTo.T900`
    padding: 10vh 12vw;
  `}
`
export const ProjectDetails = styled.div`
  max-width: 80vw;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`

export const PortfolioImage = styled.div`
  /* width: 100%; */
  /* margin: 1rem auto; */
  /* border: 1px solid var(--rise-4); */
  /* padding: 0.1rem; */
  /* border-radius: 0.5rem; */
  /* background-color: "red";
  outline: 2px solid green; */
  /* max-height: auto; */
  object-fit: contain;
`

export const PortfolioList = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background-color: var(--rise-7);
  border: 2px solid var(--rise-5);
  flex: 100%;
  align-items: center;

  & div {
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-left: 0.5rem;
    padding-inline: 1rem;
    padding: 0.5rem 1rem;
    border-left: 1px solid var(--rise-5);
  }

  & h4 {
    text-transform: uppercase;
    margin-inline: 0.5rem;
    margin-block: 0;
    margin: 0 0.5rem;
    text-align: left;
  }
  & p {
    align-items: center;
  }
  ${respondTo.T600`
    flex: 0 1 auto;
  `}
`

// export const ProjectImages = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   grid-gap: 30px;
//   max-width: 75%;
//   align-items: center;
//   background: transparent;
//   margin-inline: auto;
//   padding-bottom: 30px;
//   margin: auto auto auto 12vw;

//   ${respondTo.T700`
//      grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
//      `}
// `

export const Published = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  margin: 2rem;
  align-items: center;
  justify-content: center;
  font-size: smaller;

  & span[data-name='separator']::after {
    content: ' 😃 ';
  }

  ${respondTo.T900`
    & span[data-name="separator"]::after {
    content: "•|•";
  }
  
  `}
`

export const SingleImage = styled.div`
  display: flex;
  max-width: 80vw;
  margin: auto;
  & div {
    flex: 1;
  }
`
export const ImageDescription = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  order: -1;
  text-align: center;
  padding: 2rem;
  max-width: 20vw;
  font-size: 1.3rem;
  line-height: 1.5;

  ${respondTo.T700`
    order: 0
  `}
`
