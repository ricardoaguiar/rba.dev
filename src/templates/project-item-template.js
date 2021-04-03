import React from 'react'
import '../css/styles.css'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import {
  PortfolioList,
  ProjectDescription,
  ProjectDetails,
  Published,
  SingleImage,
  ImageDescription,
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
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }

      singleImageLeft {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }

      singleImageRight {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyContentfulFluid
        }
        id
        description
        title
      }
      #multipleRightImages {
      #  fluid(maxWidth: 1400, quality: 100) {
      #    ...GatsbyContentfulFluid
      #  }
      #  title
      #  description
      #  id
      #}
    }
  }
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

    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
        gap: 1.5rem;
        max-width: 75%;
        margin: auto;
      `}
    >
      {portfolio.images &&
        portfolio.images.map(image => (
          <Img
            fluid={image.fluid}
            alt={image.title}
            key={image.id}
            css={css`
              /* margin-bottom: 1rem; */
              /* outline: 1px solid green; */
              object-fit: cover;
            `}
          />
        ))}
    </div>

    <SingleImage>
      <Img
        fluid={portfolio.singleImageLeft.fluid}
        alt={portfolio.singleImageLeft.title}
        css={css`
          margin: 4rem;
          padding: 1rem;
          max-width: 60vw;
          height: 100%;
        `}
      />
      <ImageDescription
        css={css`
          flex: 1;
          /* outline: 2px solid blue; */
        `}
      >
        {portfolio.singleImageLeft.description}
      </ImageDescription>
    </SingleImage>

    <ProjectDescription
      dangerouslySetInnerHTML={{
        __html: portfolio.projectChallenges.childMarkdownRemark.html,
      }}
    />

    <SingleImage>
      <ImageDescription>
        {portfolio.singleImageRight.description}
      </ImageDescription>

      <Img
        fluid={portfolio.singleImageRight.fluid}
        alt={portfolio.singleImageRight.title}
        css={{ maxWidth: '20vw' }}
      />
    </SingleImage>

    <SingleImage>
      <div>PLACE SOME TEXT HERE</div>
      {portfolio.multipleRightImages &&
        portfolio.multipleRightImages.map(image => (
          <Img fluid={image.fluid} alt={image.title} key={image.id} />
        ))}
    </SingleImage>

    <Published>
      <span>Published: {portfolio.publishDate}</span>
      &nbsp;<span data-name="separator"></span>&nbsp;
      <span>Updated: {portfolio.updatedAt}</span>
    </Published>
  </Layout>
)

export default PortfolioTemplate
