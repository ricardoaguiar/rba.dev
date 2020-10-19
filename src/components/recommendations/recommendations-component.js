import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { respondTo } from "../../utils/_respondTo"
// import { node } from "prop-types"

const getReferences = graphql`
  {
    references: allContentfulTestimonials(
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          author
          title
          text: testimonial {
            testimonial
          }
          picture {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const RecomendationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 80vh;
  overflow: scroll;

  ${respondTo.T900`
    margin-left: 70px;
  `}
`
const RecomentadionTitle = styled.h2`
  margin: 100px auto 70px;

  ${respondTo.T900`
    margin: 70px 0 0 70px;
  `}
`
const RecomendationCard = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  margin: 20px;
  font-size: 14px;
  background-color: var(--rbadev-mono-1-hex);
  z-index: -1;
  max-width: 80vw;
`

const Avatar = styled.figure`
  display: flex;
  margin: 1rem;
  height: 100%;
  align-items: center;
`
const Reference = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  max-width: 80%;
`

const Testimonials = () => {
  const { references } = useStaticQuery(getReferences)

  return (
    <RecomendationContainer>
      <RecomentadionTitle>Recomendations</RecomentadionTitle>
      {references.edges.map(({ node }) => {
        return (
          <RecomendationCard key={node.id}>
            <Avatar>
              <Img
                fixed={node.picture.fixed}
                alt={node.author}
                imgStyle={{
                  borderRadius: "50%",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Avatar>
            <Reference>{node.author}</Reference>
            <Reference>{node.title}</Reference>
            <Reference>{node.text.testimonial}</Reference>
          </RecomendationCard>
        )
      })}
    </RecomendationContainer>
  )
}

export default Testimonials
