import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/react'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 8vh 8vw 8vh 12vw; */
  padding: 6vh;
  background-color: var(--rise-7);
  width: 100vw;
  line-height: 1.8;
`

const AboutContent = styled.div`
  flex: 1;
  line-height: 1.5;
  list-style: none;
  padding-inline: 10vw;

  && a {
    color: var(--rbadev-mono-1-hex);
    text-decoration: none;
  }
  a:hover {
    color: var(--rbadev-duotone-1-hex);
  }
`
const AboutCopy = styled.div`
  max-width: 60vw;
  margin: auto;
  margin-bottom: 2rem;
  padding: 1rem;
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
            css={{
              width: 'fit-content',
              margin: '0 auto',
            }}
          >
            <Img
              fluid={data.author.nodes[0].image.fluid}
              alt={data.author.nodes[0].image.description}
              key={data.author.nodes[0].image.id}
              css={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                backgroundColor: 'var(--rise-7)',
                marginBottom: '4rem',
              }}
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
    <span
      css={css`
        display: block;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem auto;
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
      CONTACT ME
    </span>
  </AboutContainer>
)

export default AboutMe
