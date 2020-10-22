import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { respondTo } from "../../utils/_respondTo"

// list of post on homepage
const getPosts = graphql`
  {
    post: allContentfulPortfolio(sort: { fields: [publishDate], order: DESC }) {
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
  padding-bottom: 2rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  /* transform: translateY(40%); */

  /* &:hover {
    @keyframes undefined-easeOutElastic {
      0% {
        transform: translateY(0%);
      }

      16% {
        transform: translateY(-132.27%);
      }

      28% {
        transform: translateY(-86.88%);
      }

      44% {
        transform: translateY(-104.63%);
      }

      59% {
        transform: translateY(-98.36%);
      }

      73% {
        transform: translateY(-100.58%);
      }

      88% {
        transform: translateY(-99.8%);
      }

      100% {
        transform: translateY(-100%);
      }
    } */
  }
`

const PostTitle = styled.h6`
  text-decoration: underline solid var(--logo);
  text-decoration-thickness: 2px;
  /* margin: 2rem 1rem 4rem 2rem; */
  margin: 1rem;
`

const PostDescription = styled.p`
  margin: 0 1rem;
  bottom: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* outline: 1px solid red; */
`

const Posts = () => {
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

export default Posts
