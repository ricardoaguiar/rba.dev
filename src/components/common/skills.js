import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { respondTo } from '../../utils/_respondTo'

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
    padding: 10vh 15vw 10vh 20vw;
  `}
`

const SkillsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-weight: bolder;
  margin: 0 auto;

  & li {
    padding: 0.5rem;
    word-break: break-word;
    flex: 1 0 160px;
  }
  ${respondTo.T900`

   & li {
     border-top: 1px solid var(--rise-7);
     border-right: 1px solid var(--rise-7);
     flex: 1 0 25%;
   }
   & li:nth-child(1), li:nth-child(5), li:nth-child(9) {
     border-left: 1px solid var(--rise-7);
   }
   & li:nth-child(9), li:nth-child(10), li:nth-child(11), li:nth-child(12) {
     border-bottom: 1px solid var(--rise-7);
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
