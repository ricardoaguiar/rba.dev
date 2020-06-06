import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
  {
    post: allContentfulAsset {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`
const FlexContainer = styled.div`
  display: flex;
  padding: 5rem;
  background-color: #88765444;
`
const FlexItem = styled.div`
  margin: 0 auto;
  width: 75vw;
  height: 50vh;
  background-color: #88765422;
  border: 0.5px solid #88765433;
`

const Post = () => {
  const { post } = useStaticQuery(getPosts)

  console.log("post", post)

  return (
    <>
      {post.edges.map(({ node }) => {
        return (
          <FlexContainer key={node.id}>
            <FlexItem>
              <p>Title = {node.title}</p>
              <p>Description = {node.description}</p>
            </FlexItem>
          </FlexContainer>
        )
      })}
    </>
  )
}

export default Post
