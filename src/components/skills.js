import React from "react"
import styled from "@emotion/styled"

const techskills = [React, JavaScript ES6, NodeJS, Gatsby, Git, HTML5, CSS3, Emotion, Contentful, Wordpress]

const skillSet = styled.ul`
    display: grid;
    grid-template-conlumns: 1fr 1fr 1fr
    margin: 2rem auto;
`

const Skills = () => {
    return (
        <skillSet>
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
        </skillSet>
    )
}

export default Skills
