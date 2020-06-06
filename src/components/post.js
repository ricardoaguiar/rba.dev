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
            fluid {
              ...GatsbyContentfulFluid_withWebp
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

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  background-color: #88765444;
  border-bottom: 1px solid #99876522;
`
const FlexItem = styled.div`
  width: 75vw;
  height: 50vh;
  background-color: #88765422;
  border: 0.5px solid #88765433;
  padding: 1rem 3rem;
`
const Image = styled.div`
  max-width: 20vw;
`

const Post = () => {
  const { post } = useStaticQuery(getPosts)

  return (
    <>
      {post.edges.map(({ node }) => {
        return (
          <FlexContainer key={node.id}>
            <FlexItem>
              <p>Title = {node.title}</p>
              <Image>
                <Img fluid={node.heroImage.fluid} alt={node.title} />
              </Image>
              <p>{node.slug}</p>
              <p>{node.text.description}</p>
            </FlexItem>
          </FlexContainer>
        )
      })}
    </>
  )
}

export default Post
