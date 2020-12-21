import React from "react"
import "../css/styles.css"
// import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { respondTo } from "../utils/_respondTo"

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

const PortfolioArticle = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: transparent;

  ${respondTo.T900`
    `};
`

// const LineSlider = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `
const Line = styled.div`
  height: 2px;
  width: 30%;
  background: var(--rise-7);
  animation: 1s slidein;
  z-index: -1;
  margin: auto 5vh;
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
  display: flex;
  justify-content: center;
  list-style: none;
  margin-right: 1rem;
  width: auto;

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

// const ProjectScope = styled.div`
//   flex: 1;
//   width: 80vw;
//   margin-bottom: 100px;
//   font-size: 18px;
//   color: var(--rbadev-mono-4-hex);
//   line-height: 2;

//   ${respondTo.T900`
//      margin: 0 auto;
//   `}
// `

const ProjectImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
  align-items: center;
  background: transparent;
  margin-left: 90px;
  margin-right: 20px;

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

const TechStack = styled.span`
  font-weight: 600;
  color: #000000;
  font-size: 0.8rem;
  letter-spacing: 0.2mm;
  padding: 4px;
  margin: 4px;
  height: min-content;
  width: max-content;
`
const ProjectComponents = styled.div`
  display: flex;
  flex-direction: column;

  ${respondTo.T900`
  margin-left: 120px;
  width: fit-content;
  `}
  & h4 {
    margin-left: 0;
    text-transform: uppercase;
  }
`

const ProjectSpecs = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80vw;
`

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>
    <SEO title={portfolio.title} />
    <PortfolioArticle>
      <ProjectDescription
        dangerouslySetInnerHTML={{
          __html: portfolio.overview.childMarkdownRemark.html && portfolio.overview.childMarkdownRemark.html,
        }}
      />
      <Line />
      <ProjectSpecs>
        <ProjectComponents>
          <h4>Project</h4>
          <PortfolioList>
            <PortfolioListItem
              dangerouslySetInnerHTML={{
                __html: portfolio.projectType.childMarkdownRemark.html && portfolio.projectType.childMarkdownRemark.html,
              }}
            />
          </PortfolioList>
        </ProjectComponents>
        <ProjectComponents>
          <h4>Stack</h4>
          {portfolio.projectStack &&
            portfolio.projectStack.map(tag => (
              <TechStack key={tag}>{tag}</TechStack>
            ))}
        </ProjectComponents>
        <ProjectComponents>
          <h4>Repo</h4>
          <span
            dangerouslySetInnerHTML={{
              __html: portfolio.repo.childMarkdownRemark.html,
            }}
          />
        </ProjectComponents>
        <ProjectComponents>
          <h4>Site</h4>
          <span
            dangerouslySetInnerHTML={{
              __html: portfolio.viewProject.childMarkdownRemark.html && portfolio.viewProject.childMarkdownRemark.html,
            }}
          />
        </ProjectComponents>
      </ProjectSpecs>
    </PortfolioArticle>
    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.stackSelection.childMarkdownRemark.html,
      }}
    />
    <ProjectImages>
      {portfolio.images &&
        portfolio.images.map(image => (
          <PortfolioImage>
            <Img fluid={image.fluid} alt={image.title} key={image.id} />
          </PortfolioImage>
        ))}
    </ProjectImages>
    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.projectChallenges.childMarkdownRemark.html && portfolio.projectChallenges.childMarkdownRemark.html,
      }}
    />
    <PortfolioList>
      <PortfolioListItem>Published: {portfolio.publishDate}</PortfolioListItem>
      •|•
      <PortfolioListItem>Updated: {portfolio.updatedAt}</PortfolioListItem>
      <PortfolioListItem></PortfolioListItem>
    </PortfolioList>
  </Layout>
)

export default PortfolioTemplate
