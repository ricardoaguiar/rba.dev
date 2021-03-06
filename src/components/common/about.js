import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/react'
import Link from '../link'
import { respondTo } from '../../utils/_respondTo'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  background-color: var(--rise-7);
  width: 100%;
  padding-top: 13vh;

  ${respondTo.T900`
  padding: 6vh;
  padding-top: 8vh;
  font-size: 1rem;
`}
`

const AboutContent = styled.div`
  flex: 1;
  line-height: 1.5;
  list-style: none;
`
const AboutCopy = styled.div`
  max-width: 90vw;
  margin: auto;
  margin-bottom: 2rem;
  font-size: 1.2rem;

  ${respondTo.T900`
  padding: 1rem;
  max-width: 65vw;
  font-size: 1rem;
  `}
`

const AboutMe = () => (
  <AboutContainer>
    <StaticQuery
      query={graphql`
        query aboutMe {
          author: allContentfulAuthor {
            nodes {
              bio: childContentfulAuthorShortBioTextNode {
                childMarkdownRemark {
                  html
                }
              }
              image {
                fluid(maxWidth: 900, quality: 80) {
                  ...GatsbyContentfulFluid
                }
                id
                description
              }
            }
          }
          facts: allContentfulAuthorRandomFactsTextNode {
            nodes {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={data => (
        <AboutContent>
          <div
            css={css`
              margin: 0 auto;
            `}
          >
            <Img
              fluid={data.author.nodes[0].image.fluid}
              alt={data.author.nodes[0].image.description}
              key={data.author.nodes[0].image.id}
              css={css`
                width: 200px;
                height: 200px;
                border-radius: 50%;
                background-color: var(--rise-7);
                margin: 0 auto;
                margin-bottom: 3.2rem;
              `}
            />
          </div>
          <AboutCopy
            dangerouslySetInnerHTML={{
              __html: data.author.nodes[0].bio.childMarkdownRemark.html,
            }}
          />
          <AboutCopy
            dangerouslySetInnerHTML={{
              __html: data.facts.nodes[0].childMarkdownRemark.html,
            }}
          />
        </AboutContent>
      )}
    />
    <Link
      to="/contact/"
      css={css`
        display: block;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 2rem auto;
        border: 1px solid transparent;
        padding-inline: 0.8rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        padding-top: 0.5rem;
        padding-bottom: 0.7rem;
        line-height: 1;
        &:hover {
          color: var(--rise-4);
          border: 1px solid var(--rise-4);
          border-radius: 0.5rem;
        }
      `}
    >
      <span>CONTACT ME</span>
    </Link>
  </AboutContainer>
)

export default AboutMe
