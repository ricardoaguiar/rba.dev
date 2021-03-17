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


// I’m Ricardo. I grew up in Brazil, and at the age of 26, I moved to New York City, where I would live for the next 13 years and then 7 more years in Miami, before moving to Denmark with my wife. 

// During my time in the USA, I’ve worked in food, advertising, and financing. Some were tech-related.  While working in advertising in New York, I developed and tested HTML email campaigns and MVPs for Citibank, GE, and Pitney Bowes companies. 

// To refresh my skills, I recently graduated from the seven-month intense Hack Your Future Bootcamp for full-stack web development in April 2020. 

        </li>
      </BlogList>
    </AboutContainer>
    </>
  )
}

export default AboutPage
