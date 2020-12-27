import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { respondTo } from '../utils/_respondTo'

const getSkills = graphql`
  {
    skill: contentfulAuthor {
      id
      skills
      copy: skillsCopy {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
const SkillSection = styled.div`
  background: var(--rise-7);
  border: 1px solid transparent;
  padding: 6vh 5vw;
  border-bottom: 6px solid var(--rise-7);

  & p {
    letter-spacing: 0.03em;
    line-height: 1.8;
    margin-bottom: 3rem;
  }
  & h2 {
    font-size: 2rem;
  }

  ${respondTo.T900`
    padding: 10vh 10vw 10vh 15vw;
  `}
`

const SkillsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-weight: bolder;
  width: 75vw;

  & li {
    padding: 0.5rem;
    width: auto;
    word-break: break-word;
    width: 50%;
  }
  ${respondTo.T900`
   & li {
    width: 25%;
   }
  
  `}
`

const Skills = () => {
  const { skill } = useStaticQuery(getSkills)
  return (
    <SkillSection>
      <span
        dangerouslySetInnerHTML={{
          __html: skill.copy.childMarkdownRemark.html,
        }}
      />
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
