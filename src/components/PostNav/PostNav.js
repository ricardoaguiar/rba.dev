import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

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
            fluid(maxWidth: 1400) {
              ...GatsbyContentfulFluid
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
          console.log(node)
          return (
            <Link to={`/${node.slug}/`} key={node.id}>
              <GridItem>
                <GridPicture>
                  <Image fluid={node.heroImage.fluid} alt={node.title} />
                </GridPicture>
              </GridItem>
              <GridCaption>
                <h3>{node.title}</h3>
                <p>{node.intro.shortDescription}</p>
              </GridCaption>
            </Link>
          )
        })}
      </GridContainer>
    </>
  )
}

export default Posts
