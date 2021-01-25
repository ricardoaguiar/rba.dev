import React from "react"
import "../css/styles.css"
// import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { respondTo } from "../utils/_respondTo"
// import { INLINES } from '@contentful/rich-text-types'

export const query = graphql`
  query($slug: String!) {
    portfolio: contentfulProjects(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "DD.MM.YYYY")
      updatedAt(formatString: "DD.MM.YYYY")
      overview {
        childMarkdownRemark {
          html
        }
      }
      projectType {
        childMarkdownRemark {
          html
        }
      }
      projectStack
      repo {
        childMarkdownRemark {
          html
        }
      }
      viewProject {
        childMarkdownRemark {
          html
        }
      }
      stackSelection {
        childMarkdownRemark {
          html
        }
      }
      projectChallenges {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid(maxHeight: 1000, maxWidth: 1800, quality: 90) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }
      images {
        fluid(maxHeight: 1000, maxWidth: 1800, quality: 90) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }
    }
  }
`

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 5vw;
  line-height: 1.5;
  margin: auto 0;

  ${respondTo.T900`
    padding: 10vh 12vw;
  `}
`
const ProjectDetails = styled.div`
  max-width: 80vw;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`

const PortfolioImage = styled.div`
  width: 100%;
  margin: 1rem auto;

  ${respondTo.T900`
    border: 1px solid #cccccc;
    border-radius: 10px;
  `}
`

const PortfolioList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-start;
  text-align: center;
  padding: 1rem;
  width: 18%;
  border-radius: 10px;
  background-color: var(--rise-7);
  border: 2px solid var(--rise-5);

  & h4 {
    margin: 0 auto 1rem auto;
    text-transform: uppercase;
    display: block;
  }
`

const ProjectImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
  align-items: center;
  background: transparent;
  margin-left: 90px;
  margin-right: 20px;
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

const Published = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  margin-block: 1rem;
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

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>
    <SEO title={portfolio.title} />

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.overview.childMarkdownRemark.html,
      }}
    />
    <ProjectDetails>
      <PortfolioList>
        <h4>Project</h4>
        <span
          dangerouslySetInnerHTML={{
            __html: portfolio.projectType.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>

      <PortfolioList>
        <h4>Stack</h4>
        {portfolio.projectStack &&
          portfolio.projectStack.map(tag => <span key={tag}>{tag}</span>)}
      </PortfolioList>

      <PortfolioList>
        <h4>Repo</h4>
        <span
          dangerouslySetInnerHTML={{
            __html: portfolio.repo.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>
      <PortfolioList>
        <h4>Site</h4>
        <span
          dangerouslySetInnerHTML={{
            __html: portfolio.viewProject.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>
    </ProjectDetails>

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.stackSelection.childMarkdownRemark.html,
      }}
    />

    <ProjectImages>
      {portfolio.images &&
        portfolio.images.map(image => (
          <PortfolioImage key={image.key}>
            <Img fluid={image.fluid} alt={image.title} key={image.id} />
          </PortfolioImage>
        ))}
    </ProjectImages>

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.projectChallenges.childMarkdownRemark.html,
      }}
    />

    <Published>
      <span>Published: {portfolio.publishDate}</span>
      &nbsp;<span data-name="separator"></span>&nbsp;
      <span>Updated: {portfolio.updatedAt}</span>
    </Published>
  </Layout>
)

export default PortfolioTemplate
