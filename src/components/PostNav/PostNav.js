import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/react'

import {
  GridContainer,
  GridItem,
  GridPicture,
  GridCaption,
  Projects,
} from './PostNav.styles'

const getPosts = graphql`
  {
    post: allContentfulProjects(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          intro: shortDescription {
            shortDescription
          }
          id
          slug
          heroImage {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Posts = ({ title = 'Projects' }) => {
  const { post } = useStaticQuery(getPosts)

  return (
    <>
      <Projects>
        <h3>{title}</h3>
      </Projects>
      <GridContainer>
        {post.edges.map(({ node }) => {
          return (
            <Link
              to={`/${node.slug}/`}
              key={node.id}
              css={css`
                &:hover {
                  border: 1px solid var(--rise-7);
                  background-color: var(--rise-75);
                  border-radius: 8px;
                }
              `}
            >
              <GridItem>
                <GridPicture>
                  <Image fluid={node.heroImage.fluid} alt={node.title} />
                </GridPicture>
              </GridItem>
              <GridCaption>
                <h3>{node.title}</h3>
                <p>
                  {node.intro.shortDescription}
                  {/* <ViewProject>
                    View Project&nbsp;
                    <span role="img" aria-label="view-project">
                      👉
                    </span>
                  </ViewProject> */}
                </p>
              </GridCaption>
            </Link>
          )
        })}
      </GridContainer>
    </>
  )
}

export default Posts
