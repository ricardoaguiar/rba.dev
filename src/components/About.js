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
      <h3>Hi</h3>
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
    </>
  )
}

export default AboutPage
