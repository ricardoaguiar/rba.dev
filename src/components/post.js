import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getPosts = graphql`
  {
    post: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  background-color: #88765444;
  border-bottom: 1px solid #99876522;
`
const GridItem = styled.div`
  background-color: #88765422;
  border: 0.5px solid #88765433;
`

const Post = () => {
  const { post } = useStaticQuery(getPosts)

  return (
    <>
      <GridContainer>
        {post.edges.map(({ node }) => {
          return (
            <GridItem>
              <p>Title = {node.title}</p>
              <Img fluid={node.heroImage.fluid} alt={node.title} />
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
