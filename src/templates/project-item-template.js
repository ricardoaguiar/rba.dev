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

const Line = styled.div`
  height: 3px;
  width: 50%;
  background: var(--rise-4);
  margin: 0 auto 8vh;
`

const ProjectComponents = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 5vw;
  background-color: var(--rise-7);
  justify-content: space-around;
  align-items: flex-start;
  padding-block: 2vh;
  width: 5vw;
  border-radius: 10px;
  border: 2px solid var(--rise-5);

  ${respondTo.T900`
  flex-direction: row;
`};
`

const PortfolioImage = styled.div`
  width: 100%;
  margin: 1rem auto;

  ${respondTo.T900`
    border: 1px solid #cccccc;
    border-radius: 10px;
  `}
`

const PortfolioList = styled.ul`
  justify-content: center;

  & li {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 2px 5px;
    justify-content: space-around;
  }
  & h4 {
    margin: 0;
    text-transform: uppercase;
  }
  & span {
    letter-spacing: 0.5mm;
  }
  ${respondTo.T900`
   /* margin-left: 70px; */
`};
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

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>
    <SEO title={portfolio.title} />

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.overview.childMarkdownRemark.html,
      }}
    />

    <ProjectComponents>
      <PortfolioList>
        <li>
          <h4>Project</h4>
        </li>
        <li
          dangerouslySetInnerHTML={{
            __html: portfolio.projectType.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>
    </ProjectComponents>

     <ProjectComponents>
      <PortfolioList>
        <li>
          <h4>Stack</h4>
        </li>
        <li>
          {portfolio.projectStack &&
            portfolio.projectStack.map(tag => <span key={tag}>{tag}</span>)}
        </li>
      </PortfolioList>
    </ProjectComponents>
  
     <ProjectComponents>
      <PortfolioList>
        <li>
          <h4>Repo</h4>
        </li>
        <li
          dangerouslySetInnerHTML={{
            __html: portfolio.repo.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>
    </ProjectComponents>
  
     <ProjectComponents>
      <PortfolioList>
        <li>
          <h4>Site</h4>
        </li>
        <li
          dangerouslySetInnerHTML={{
            __html: portfolio.viewProject.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>
    </ProjectComponents>
  
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

    <PortfolioList>
      <li>Published: {portfolio.publishDate}</li>
      •|•
      <li>Updated: {portfolio.updatedAt}</li>
    </PortfolioList>
  </Layout>
)

export default PortfolioTemplate
