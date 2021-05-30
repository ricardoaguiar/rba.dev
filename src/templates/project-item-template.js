import React from 'react'
import '../css/styles.css'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import {
  ProjectIntro,
  PortfolioList,
  ProjectDescription,
  ProjectDetails,
  Published,
  SingleImage,
  ImageDescription,
  SingleImageLeft,
  SingleImageRight,
  MultipleImages,
  MultipleImageDescription,
} from './project-item-styles'

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
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        id
        description
        title
      }

      singleImageLeft {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        id
        description
        title
      }

      singleImageRight {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        id
        description
        title
      }
      multipleRightImages {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        title
        description
        id
      }
      imagesDescription {
        childMarkdownRemark {
          html
        }
      }
      lessons {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const PortfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>
    <SEO title={portfolio.title} />
    <ProjectIntro
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

    <SingleImage>
      {portfolio.images &&
        portfolio.images.map(image => (
          <Img fluid={image.fluid} alt={image.title} key={image.id} />
        ))}
    </SingleImage>

    <SingleImageLeft>
      <Img
        fluid={portfolio.singleImageLeft.fluid}
        alt={portfolio.singleImageLeft.title}
      />
      <ImageDescription>
        {portfolio.singleImageLeft.description}
      </ImageDescription>
    </SingleImageLeft>

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.projectChallenges.childMarkdownRemark.html,
      }}
    />

    <SingleImageRight>
      <ImageDescription>
        {portfolio.singleImageRight.description}
      </ImageDescription>

      <Img
        fluid={portfolio.singleImageRight.fluid}
        alt={portfolio.singleImageRight.title}
      />
    </SingleImageRight>

    <SingleImage>
      <MultipleImageDescription
        dangerouslySetInnerHTML={{
          __html: portfolio.imagesDescription.childMarkdownRemark.html,
        }}
      />
      <MultipleImages>
        {portfolio.multipleRightImages &&
          portfolio.multipleRightImages.map(image => (
            <Img fluid={image.fluid} alt={image.title} key={image.id} />
          ))}
      </MultipleImages>
    </SingleImage>

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.lessons.childMarkdownRemark.html,
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
