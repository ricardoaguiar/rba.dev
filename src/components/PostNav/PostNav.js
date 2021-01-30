import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import {
  GridContainer,
  GridItem,
  GridPicture,
  GridCaption,
  Projects,
} from "./PostNav.styles"

// import { INLINES } from "contentful/rich-test-types"

const getPosts = graphql`
  {
    post: allContentfulProjects(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          overview {
            childMarkdownRemark {
              html
            }
          }
          id
          slug
          heroImage {
            fluid(maxHeight: 1000, maxWidth: 1800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Posts = ({ title = "Projects" }) => {
  const { post } = useStaticQuery(getPosts)
  return (
    <>
      <Projects>
        <h3>{title}</h3>
      </Projects>
      <GridContainer>
        {post.edges.map(({ node }) => {
          return (
            <Link to={`/${node.slug}/`} key={node.id}>
              <GridItem>
                <GridPicture>
                  <Image fluid={node.heroImage.fluid} alt={node.title} />
                  <GridCaption>
                    <h3>{node.title}</h3>
                  </GridCaption>
                </GridPicture>
              </GridItem>
            </Link>
          )
        })}
      </GridContainer>
    </>
  )
}

export default Posts
