import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import {
  GridContainer,
  GridItem,
  GridPicture,
  GridCaption,
  PostTitle,
  PostDescription,
  Projects,
} from "./PostNav.styles"

// list of post on homepage //grid
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

const Posts = ({ title = `Projects` }) => {
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
                  <GridCaption
                    dangerouslySetInnerHTML={{
                      __html: node.overview.childMarkdownRemark.html,
                    }}
                  />
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
