import React from "react"
import "../pages/styles.css"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { respondTo } from "../utils/_respondTo"

export const query = graphql`
  query($slug: String!) {
    portfolio: contentfulPortfolio(slug: { eq: $slug }) {
      author {
        name
      }
      portfolioDescription {
        json
      }
      scope: body {
        body
      }
      publishDate
      heroImage {
        fluid(maxHeight: 1200, maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      title
      updatedAt
      tags
    }
  }
`

const PortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 95vw;
  margin: 80px auto 0;

  ${respondTo.T900`
    width: calc(100vw - 70px);
    margin: 35px 0 35px 60px;
    flex-direction: row;
  `}
`

const PortfolioArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${respondTo.T900`
    width: 50vw;
    `}
`

const PortfolioTitle = styled.h1`
  align-items: flex-start;
  margin-left: 0.5rem;

  ${respondTo.T900`
    padding-right: 0.5rem;
    margin: 50px 0 1rem 70px;
  `}
`
const PortfolioImage = styled.figure`
  width: 95%;
  margin: 1rem auto;

  ${respondTo.T900`
    width: 50%;
    align-self: flex-start;
    margin-right: 40px;
    border: 1px solid var(--logo);
    border-radius: 2px;
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
const Line = styled.hr`
  border: none;
  height: 6px;
  background: var(--logo);
  margin-bottom: 4px;
  margin: -1.2rem 0 1rem -75px;
  width: 200%;

  ${respondTo.T900`
    height: 8px;
    margin: -1.2rem 0 1rem 70px;
    width: 100%;
  `}
`
const ProjectSubtitle = styled.p`
  font-weight: bolder;
  margin: 1rem 0 1rem 0.5rem;

  ${respondTo.T900`
    margin: 35px 0 20px 70px;
  `}
`

const ProjectScope = styled.div`
  margin-left: 0.5rem;
  margin-bottom: 100px;
  font-family: bio-sans;
  font-size: 16px;

  ${respondTo.T900`
     margin-left: 70px;
  `}
`

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Wrapper>
    <Header />
    <SEO title="Home" />
    <PortfolioSection>
      <PortfolioArticle>
        <PortfolioTitle>{portfolio.title}</PortfolioTitle>
        <Line />
        <ProjectSubtitle>Project Scope</ProjectSubtitle>
        <ProjectScope>{portfolio.scope.body}</ProjectScope>
        <PortfolioList>
          <PortfolioListItem>{portfolio.updatedAt}</PortfolioListItem>
          <PortfolioListItem>{portfolio.title}</PortfolioListItem>
          <PortfolioListItem>{portfolio.publishDate}</PortfolioListItem>
          <PortfolioListItem></PortfolioListItem>
        </PortfolioList>
      </PortfolioArticle>
      <PortfolioImage>
        <Image fluid={portfolio.heroImage.fluid} alt={portfolio.title} />
      </PortfolioImage>
    </PortfolioSection>
    <Footer />
  </Wrapper>
)

export default PortfolioTemplate
