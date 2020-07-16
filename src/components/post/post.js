import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { respondTo } from "../../utils/_respondTo"

const getPosts = graphql`
  {
    post: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 800, maxHeight: 600) {
              ...GatsbyContentfulFluid
            }
          }
          text: description {
            description
          }
        }
      }
    }
  }
`

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  background: transparent;

  ${respondTo.sm`
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin: 0 4vw 0 3vw;
  `}
`
const GridItem = styled.article`
  background: whitesmoke;
  border: 1px solid #fff;
  z-index: -1;
`

const Post = () => {
  const { post } = useStaticQuery(getPosts)

  return (
    <>
      <GridContainer>
        {post.edges.map(({ node }) => {
          return (
            <GridItem key={node.id}>
              <p>Title = {node.title}</p>
              <Image fluid={node.heroImage.fluid} alt={node.title} />
              <p>{node.slug}</p>
              <p>{node.text.description}</p>
            </GridItem>
          )
        })}
      </GridContainer>
    </>
  )
}

export default Post
