import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { respondTo } from "../utils/_respondTo"

// list of post on homepage //grid
const getPosts = graphql`
  {
    post: allContentfulProjects(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
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
// grid
const GridContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  padding: 5vh 5vw;
  background: var(--rise-8);
  height: auto;

  ${respondTo.M400`
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    `}
  ${respondTo.T900`
     grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
     margin-left: 90px;
  `}
`
// grid item / cell
const GridItem = styled.div`
  background: transparent;
  z-index: -999;
`
// grid content
const GridPicture = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid var(--rise-7);
`
// img caption
const GridCaption = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 2rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.55);
`

const PostTitle = styled.h3`
  text-decoration: underline solid var(--logo);
  text-decoration-thickness: 2px;
  margin: 1rem;
`

const PostDescription = styled.p`
  margin: 0 3rem 1rem 1rem;
  bottom: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const Projects = styled.h3`
  font-size: 2rem;
  background-color: var(--rise-5);
  width: min-content;
  align-items: center;
`

const Posts = () => {
  const { post } = useStaticQuery(getPosts)
  return (
    <>
      <Projects>Projects</Projects>
      <GridContainer>
        {post.edges.map(({ node }) => {
          return (
            <Link to={`/${node.slug}/`} key={node.id}>
              <GridItem>
                <GridPicture>
                  <Image fluid={node.heroImage.fluid} alt={node.title} />
                  <GridCaption>
                    <PostTitle>{node.title}</PostTitle>
                    <PostDescription>
                      {/* {node.shortDescription.shortDescription} */}
                    </PostDescription>
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
