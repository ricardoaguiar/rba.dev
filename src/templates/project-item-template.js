import React from "react"
import "../css/styles.css"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import {
  PortfolioList,
  ProjectDescription,
  ProjectDetails,
  ProjectImages,
  PortfolioImage,
  Published,
  SingleImage,
  ImageDescription,
} from "./project-item-styles"

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
      images {
        fluid(maxHeight: 1000, maxWidth: 1800, quality: 90) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }

      singleImageLeft {
        fluid(maxWidth: 1800, quality: 80) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }
      singleImageRight {
        fluid(maxWidth: 1800, quality: 80) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }
    }
  }
`

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>
    {console.log(portfolio)}
    {console.log(portfolio.singleImageLeft)}
    <SEO title={portfolio.title} />

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.overview.childMarkdownRemark.html,
      }}
    />
    <ProjectDetails>
      <PortfolioList>
        <h4>Project</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: portfolio.projectType.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>

      <PortfolioList>
        <h4>Stack</h4>
        <div>
          {portfolio.projectStack &&
            portfolio.projectStack.map(tag => <p key={tag}>{tag}</p>)}
        </div>
      </PortfolioList>

      <PortfolioList>
        <h4>Repo</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: portfolio.repo.childMarkdownRemark.html,
          }}
        />
      </PortfolioList>
      <PortfolioList>
        <h4>Site</h4>
        <div
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

    <SingleImage>
      <PortfolioImage>
        <Img
          fluid={portfolio.singleImageLeft.fluid}
          alt={portfolio.singleImageLeft.title}
        />
      </PortfolioImage>
      <ImageDescription>
        {portfolio.singleImageLeft.description}
      </ImageDescription>
    </SingleImage>

    <SingleImage>
      <ImageDescription>
        {portfolio.singleImageRight.description}
      </ImageDescription>

      <PortfolioImage>
        <Img
          fluid={portfolio.singleImageRight.fluid}
          alt={portfolio.singleImageRight.title}
        />
      </PortfolioImage>
    </SingleImage>

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
