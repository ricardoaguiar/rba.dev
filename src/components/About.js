import React from 'react'
import styled from '@emotion/styled'

const AboutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 8vh 8vw 8vh 12vw;
  background-color: var(--white);
  width: 100vw;
  height: 75vh;
`

const BlogList = styled.ul`
  margin-left: 10vw;
  width: max-content;
  line-height: 1.5;
  list-style: none;

  && a {
    color: var(--rbadev-mono-1-hex);
    text-decoration: none;
  }
  a:hover {
    color: var(--rbadev-duotone-1-hex);
  }
`

function AboutPage () {
  return (
    <>
    <AboutContainer>
      <h1>Hi there!</h1>
      <BlogList>
        <li>



        </li>
      </BlogList>
    </AboutContainer>
    </>
  )
}

export default AboutPage
