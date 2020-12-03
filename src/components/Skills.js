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
const SkillSection = styled.div`
  background: var(--rise-7);
  border: 1px solid transparent;
  height: 45vh;
`

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
  grid-gap: 1rem;
  margin: 0 auto;
  width: 60vw;
  font-weight: bolder;
  & li {
    padding: 0;
    margin: 0;
  }
`

const Skills = () => {
  const { skill } = useStaticQuery(getSkills)
  return (
    <SkillSection>
      <h3
        css={css`
          color: var(--rise-3);
          margin: 4rem 0 0 200px;
          font-size: 1.5rem;
        `}
      >
        Skills:
      </h3>
      <SkillsContainer>
        {skill.skills &&
          skill.skills.map(skills => {
            return <li key={skills}>{skills}</li>
          })}
      </SkillsContainer>
    </SkillSection>
  )
}

export default Skills
