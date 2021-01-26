import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"

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
  width: 100%;
  margin: 1rem auto;
  border: 1px solid var(--rise-4);
`

export const PortfolioList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background-color: var(--rise-7);
  border: 2px solid var(--rise-5);
  flex: 100%;

  & span > ul {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    flex: 100%;
  }
  & div {
    display: flex;
    flex-flow: column wrap;
  }
  & h4 {
    /* margin: 0 auto 1rem auto; */
    text-transform: uppercase;
    display: block;
    align-self: flex-start;
    max-width: 40%;
  }
  ${respondTo.T900`
    flex: auto;
  `}
`

export const ProjectImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
  max-width: 80vw;
  align-items: center;
  background: transparent;
  margin-inline: auto;
  padding-bottom: 30px;

  ${respondTo.T700`
     grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
     `}
  ${respondTo.T800`

     grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
     `}
     ${respondTo.T900`

     grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
     `}
     ${respondTo.T1000`

     grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  `}
`

export const Published = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  margin-block: 2rem;
  align-items: center;
  justify-content: center;
  font-size: smaller;

  & span[data-name="separator"]::after {
    content: "🤓";
  }

  ${respondTo.T900`
    & span[data-name="separator"]::after {
    content: "•|•";
  }
  
  `}
`
