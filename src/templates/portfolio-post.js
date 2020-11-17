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
  outline: 1px solid green;
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
  background-color: #cccccc33;

  ${respondTo.T900`
    `};
`

const PortfolioTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  margin-left: 0.5rem;
  background-color: #34589510;

  & h1 {
    font-size: 2rem;
  }
  ${respondTo.T900`
    padding-right: 0.5rem;
    margin: 50px 0 1rem 70px;
  `}
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
  background: var(--logo);
  animation: 1s slidein;
  z-index: -1;
`

const PortfolioImage = styled.div`
  width: 100%;
  margin: 1rem auto;

  ${respondTo.T900`
    border: 1px solid var(--logo);
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
  background-color: var(--rbadev-mono-2-hex);
  margin-bottom: 1rem;
  padding: 2px 5px;
`

const ProjectSubtitle = styled.p`
  background: var(--logo);
  font-weight: bolder;
  margin: 1rem 0 1rem 0.5rem;
  flex: 1;

  ${respondTo.T900`
    margin: 35px 0 20px 70px;
  `}
`

const ProjectScope = styled.div`
  flex: 1;
  width: 50vw;
  background-color: #fff444;
  margin-left: 0.5rem;
  margin-bottom: 100px;
  font-size: 16px;

  ${respondTo.T900`
     margin-left: 70px;
  `}
`

const ProjectImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  grid-gap: 20px;
  align-items: center;
  margin-left: 70px;
  background: #cccccc55;
`

const StackTags = styled.span`
  flex: 0;
  font-weight: 500;
  color: #fff;
  font-size: 0.7rem;
  letter-spacing: 0.2mm;
  background: gray;
  padding: 4px;
  margin: 4px;
  height: min-content;
  width: max-content;
  border-radius: 3px;
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
      <Line />
      {portfolio.tags &&
        portfolio.tags.map(tag => <StackTags key={tag}>{tag}</StackTags>)}
    </PortfolioTitle>

    <PortfolioArticle>
      <ProjectSubtitle>Project Scope</ProjectSubtitle>
      <ProjectScope>{portfolio.scope.body}</ProjectScope>
      <PortfolioList>
        <PortfolioListItem>{portfolio.updatedAt}</PortfolioListItem>
        <PortfolioListItem>{portfolio.title}</PortfolioListItem>
        <PortfolioListItem>{portfolio.publishDate}</PortfolioListItem>
        <PortfolioListItem></PortfolioListItem>
      </PortfolioList>
    </PortfolioArticle>
    <ProjectImages>
      <PortfolioImage key={portfolio.heroImage.id}>
        <Img fluid={portfolio.heroImage.fluid} alt={portfolio.title} />
      </PortfolioImage>
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
