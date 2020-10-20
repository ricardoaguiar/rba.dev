import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
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
// grid
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
// grid item / cell
const GridItem = styled.article`
  background: var(--rbadev-mono-1-hex);
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  z-index: -999;
`

// grid content
const GridPicture = styled.figure`
  overflow: hidden;
  position: relative;
`
// img caption
const GridCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
`

const PostTitle = styled.h6`
  text-decoration: underline solid var(--logo);
  text-decoration-thickness: 2px;
  margin: 1rem;
`

const PostDescription = styled.p`
  display: block;
  margin: 1rem 1rem 3rem 1rem;
`

const Post = () => {
  const { post } = useStaticQuery(getPosts)

  return (
    <GridContainer>
      {post.edges.map(({ node }) => {
        return (
          <Link to={`/${node.slug}`}>
            <GridItem key={node.id}>
              <GridPicture>
                <Image fluid={node.heroImage.fluid} alt={node.title} />
                <GridCaption>
                  <PostTitle>{node.title}</PostTitle>
                  <PostDescription>{node.text.description}</PostDescription>
                </GridCaption>
              </GridPicture>
            </GridItem>
          </Link>
        )
      })}
    </GridContainer>
  )
}

export default Post
