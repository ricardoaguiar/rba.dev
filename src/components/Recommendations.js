import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { respondTo } from '../utils/_respondTo'

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

const RecommendationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* height: 80vh; */
  /* overflow: scroll; */

  ${respondTo.T900`
    margin-left: 70px;
  `}
`
const RecommendationTitle = styled.h2`
  margin: 100px auto 70px;

  ${respondTo.T900`
    margin: 70px 0 0 70px;
  `}
`
const RecommendationCard = styled.ul`
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
  width: 75vw;
`

const Avatar = styled.li`
  display: flex;
  margin: 1rem;
  align-self: center;

  ${respondTo.T900`
    align-items: center;
    height: 100%;
  `}
`
const Reference = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  font-family: bio-sans;
  width: 75%;
  padding: 0.5rem;

  ${respondTo.T900`
      margin-left: -3rem;
  `}
`

const Testimonials = () => {
  const { references } = useStaticQuery(getReferences)

  return (
    <RecommendationContainer>
      <RecommendationTitle>Recommendations</RecommendationTitle>
      {references.edges.map(({ node }) => {
        return (
          <RecommendationCard key={node.id}>
            <Avatar>
              <Img
                fixed={node.picture.fixed}
                alt={node.author}
                imgStyle={{
                  borderRadius: '50%',
                  objectFit: 'contain',
                  width: '100%'
                }}
              />
            </Avatar>
            <Reference>
              {node.author}
              <br />
              {node.title}
              <br />
              {node.text.testimonial}
            </Reference>
          </RecommendationCard>
        )
      })}
    </RecommendationContainer>
  )
}

export default Testimonials
