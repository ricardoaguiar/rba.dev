import React from "react"
import styled from "@emotion/styled"

const SkillContainer = styled.ul`
    display: grid;
    grid-template-conlumns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin: 3rem auto;
    width: 50vw;
`

const Skills = () => {
    return (
   <SkillContainer>
    <li>Skills:</li>
    <li>React</li>
    <li>JavaScript</li>
    <li>ES6</li>
    <li>NodeJS</li>
    <li>Gatsby</li>
    <li>AWS Lightsail</li>
    <li>Git</li>
    <li>Github</li>
    <li>CSS3</li>
    <li>HTML5</li>
    <li>KnexJS</li>
    <li>MySQL</li>
    <li>Photography</li>
    <li>Photoshop</li>
    <li>Lightroom</li>
   </SkillContainer>
    )
}

export default Skills
