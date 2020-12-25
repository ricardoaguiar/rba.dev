import React from 'react'
import styled from '@emotion/styled'

const AboutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 3rem;
  padding: 0.5rem;
  background-color: var(--rba-4);
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
    <AboutContainer>
      <h3>Who is this guy?</h3>
      <BlogList>
        <li>
          <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'>
            Atribute Selector
          </a>
        </li>
        <li>
          <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance'>
            Cascade and Inheritance
          </a>
        </li>
        <li>
          <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context'>
            The stacking context
          </a>
        </li>
      </BlogList>
    </AboutContainer>
  )
}

export default AboutPage
