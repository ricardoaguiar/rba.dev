import React from "react"
import styled from "@emotion/styled"
import css from "@emotion/css"

const SkillContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin: 3rem auto;
    width: 60vw;
`

const Skills = () => {
    return (
   <>
   <h4
      css={css`
            color: var(--logo);
            margin-left: 170px;
          `}
        >Skills:</h4>
   <SkillContainer>
    <li>React</li>
    <li>JavaScript</li>
    <li>ES6</li>
    <li>Styled Components</li>
    <li>NodeJS</li>
    <li>Git</li>
    <li>Swagger</li>   
    <li>Gatsby</li>
    <li>Contentful</li>
    <li>CSS3</li>
    <li>HTML5</li>
    <li>MySQL</li>
    <li>Photography</li>
    <li>Photoshop</li>
   </SkillContainer>
  </>
    )
}

export default Skills
