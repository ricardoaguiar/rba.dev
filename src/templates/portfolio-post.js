import React from "react"
import "../css/styles.css"
import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { respondTo } from "../utils/_respondTo"

export const query = graphql`
  query($slug: String!) {
    portfolio: contentfulPortfolio(slug: { eq: $slug }) {
      author {
        name
      }
      id
      title
      tags
      slug
      portfolioDescription {
        json
      }
      scope: body {
        body
      }
      publishDate(formatString: "YYYY/MM/DD")
      updatedAt
      heroImage {
        fluid(maxHeight: 1000, maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
        id
      }
      images {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
        title
        id
      }
    }
  }
`

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 95vw;
  margin: 80px auto 0;

  ${respondTo.T900`
    width: calc(100vw - 70px);
    margin: 35px 0 35px 60px;
    flex-direction: row;
  `}
`

const PortfolioArticle = styled.div`
  margin: 1rem;
  /* outline: 1px solid red; */
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: transparent;

  ${respondTo.T900`
    `};
`

const PortfolioTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  margin-left: 0.5rem;

  ${respondTo.T900`
    padding-right: 0.5rem;
    margin: 50px 0 1rem 70px;
  `}

  & h1 {
    font-size: 2rem;
    margin-left: 0px;

  ${respondTo.T900`
    margin-left: 20px;
  `}
  }
`

const LineSlider = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`
const Line = styled.div`
  height: 2px;
  width: 30%;
  background: var(--logo);
  animation: 1s slidein;
  z-index: -1;
  margin: 1rem 0 1rem 120px;
`

const PortfolioImage = styled.div`
  width: 100%;
  margin: 1rem auto;

  ${respondTo.T900`
    border: 1px solid #cccccc;
    border-rarius: 10px;
  `}
`

const PortfolioList = styled.ul`
  list-style: none;
  margin-right: 1rem;
  width: auto;
  justify-content: flex-start;
  font-family: bio-sans;

  ${respondTo.T900`
   margin-left: 70px;
   font-size: 14px;
`}
`
const PortfolioListItem = styled.li`
  background-color: transparent;
  margin-bottom: 1rem;
  padding: 2px 5px;
`

const ProjectSubtitle = styled.div`


  ${respondTo.T900`
    font-weight: bolder;
    margin: 1rem auto 2rem auto;
    width: 80vw;
    font-size: 34px;
  `}
`

const ProjectScope = styled.div`
  flex: 1;
  width: 80vw;
  margin-bottom: 100px;
  font-size: 18px;
  color: var(--rbadev-mono-4-hex);
  line-height: 2;


  ${respondTo.T900`
     margin: 0 auto;
  `}
`

const ProjectImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  grid-gap: 20px;
  align-items: center;

  background: transparent;


  ${respondTo.T900`
     grid-template-columns: repeat(auto-fit, minmax(650px, 1fr));
     margin-left: 90px;
     margin-right: 20px;
  `}
`

const StackTags = styled.span`
  font-weight: 600;
  color: #000000;
  font-size: 0.8rem;
  letter-spacing: 0.2mm;
  padding: 4px;
  margin: 4px;
  height: min-content;
  width: max-content;
`
const Stack = styled.div`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${respondTo.T900`
  margin: 3rem 0 3rem 120px;
  width: fit-content;
  `}
`

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>
    <SEO title={portfolio.title} />
    <PortfolioTitle>
      <h1
        css={css`
          animation: ${LineSlider} 1s;
        `}
      >
        {portfolio.title}
      </h1>
      

    </PortfolioTitle>

    <PortfolioArticle>
      <ProjectSubtitle>Project Scope</ProjectSubtitle>
      <ProjectScope>{portfolio.scope.body}</ProjectScope>
        <Line />
<Stack> 
    <div>col1</div>
       {portfolio.tags && portfolio.tags.map(tag => <StackTags key={tag}>{tag}</StackTags>)}
</Stack>
      <PortfolioList>
        <PortfolioListItem>{portfolio.updatedAt}</PortfolioListItem>
        <PortfolioListItem>{portfolio.title}</PortfolioListItem>
        <PortfolioListItem>{portfolio.publishDate}</PortfolioListItem>
        <PortfolioListItem></PortfolioListItem>
      </PortfolioList>
    </PortfolioArticle>
    <ProjectImages>
      {portfolio.images &&
        portfolio.images.map(image => (
          <PortfolioImage>
            <Img fluid={image.fluid} alt={image.title} key={image.id} />
          </PortfolioImage>
        ))}
    </ProjectImages>
  </Layout>
)

export default PortfolioTemplate
