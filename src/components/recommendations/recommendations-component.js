import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { respondTo } from "../../utils/_respondTo"
// import { respondTo } from "../../utils/_respondTo"
// import { node } from "prop-types"

const getReferences = graphql`
  {
    references: allContentfulTestimonials {
      edges {
        node {
          id
          author
          text: testimonial {
            testimonial
          }
          picture {
            fixed(width: 100, height: 90) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const RecomendationCard = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 10rem;
  border: 1px solid red;
  list-style: none;
  border-radius: 65px;

  & img {
    border-radius: 50%;
  }

  /* ${respondTo.T900`

  `} */
`

// const Avatar = styled.img`
//   border-radius: 50px;
// `

const Testimonials = () => {
  const { references } = useStaticQuery(getReferences)

  return (
    <>
      <h2>Recomendations</h2>
      {references.edges.map(({ node }) => {
        return (
          <RecomendationCard key={node.id}>
            <Img fixed={node.picture.fixed} alt={node.author} />
            <p>
              {node.author}
              <br />
              {node.text.testimonial}
            </p>
          </RecomendationCard>
        )
      })}
    </>
  )
}

export default Testimonials
