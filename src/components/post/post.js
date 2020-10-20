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
  grid-template-rows: 1fr;
  justify-content: center;
  margin: 0 auto;

  ${respondTo.M300`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `}
  ${respondTo.T900`
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    margin-left: 70px;
  `}
`
const GridItem = styled.article`
  background: var(--rbadev-mono-1-hex);
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  z-index: -1;
`

const PostTitle = styled.h5`
  padding: 1rem;
  text-decoration: underline solid var(--logo);
  text-decoration-thickness: 2px;
`

const PostDescription = styled.p`
  display: block;
  outline: 1px solid red;
`
const Post = () => {
  const { post } = useStaticQuery(getPosts)

  return (
    <>
      <GridContainer>
        {post.edges.map(({ node }) => {
          return (
            <GridItem key={node.id}>
              <Image fluid={node.heroImage.fluid} alt={node.title} />
              <PostTitle>{node.title}</PostTitle>
              <PostDescription>{node.text.description}</PostDescription>
            </GridItem>
          )
        })}
      </GridContainer>
    </>
  )
}

export default Post
