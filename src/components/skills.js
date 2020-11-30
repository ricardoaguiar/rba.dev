import React from "react"
import styled from "@emotion/styled"
import css from "@emotion/css"
import { useStaticQuery, graphql } from "gatsby"

const getSkills = graphql`
  {
    skill: contentfulPerson {
      skills
    }
  }
`

const SkillContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  margin: 1rem auto 5rem auto;
  width: 60vw;
  font-weight: bolder;
`

const Skills = () => {
  const { skill } = useStaticQuery(getSkills)
  return (
    <>
      <h3
        css={css`
          color: var(--logo);
          margin: 5rem 0 0 100px;
        `}
      >
        Skills:
      </h3>
      <SkillContainer>
        {skill.skills &&
          skill.skills.map(skills => {
            return <li key={skills}>{skills}</li>
          })}
      </SkillContainer>
    </>
  )
}

export default Skills
