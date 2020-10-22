import React from "react"
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
      body {
        body
      }
      subtitle: description {
        description
      }
      publishDate
      heroImage {
        fluid(maxHeight: 1200, maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      title
      updatedAt
    }
  }
`

const PortfolioSection = styled.section`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 70px);
  margin-left: 70px;
  /* min-height: 80vh; */
  /* outline: 1px solid red; */
`

const PortfolioArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50vw;
`

const PortfolioTitle = styled.h1`
  align-items: flex-start;

  ${respondTo.T900`
    margin: 50px 0 1rem 70px;
  `}
`
const PortfolioImage = styled.figure`
  width: 50%;

  ${respondTo.T900`
    align-self: flex-start;
    margin: 1rem 70px 1rem .5rem;
    border: 1px solid var(--logo);
    border-radius: 2px;
  `}
`

const PortfolioList = styled.ul`
  list-style: none;
  margin-right: 1rem;
  width: auto;
  justify-content: flex-start;

  ${respondTo.T900`
   margin-left: 70px;
   font-family: bio-sans;
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
  height: 8px;
  background: var(--logo);
  margin-bottom: 4px;
  margin: -1.2rem 0 1rem 70px;
  width: 100%;
`

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Wrapper>
    <Header />
    <SEO title="Home" />
    <PortfolioSection>
      <PortfolioArticle>
        <PortfolioTitle>{portfolio.title}</PortfolioTitle>
        <Line />
        <PortfolioList>
          <PortfolioListItem>{portfolio.updatedAt}</PortfolioListItem>
          <PortfolioListItem>
            {portfolio.subtitle.description}
          </PortfolioListItem>
          <PortfolioListItem>{portfolio.body.body}</PortfolioListItem>
          <PortfolioListItem>{portfolio.publishDate}</PortfolioListItem>
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
