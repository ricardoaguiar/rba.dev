import React from 'react'
import '../css/styles.css'
import SEO from '../components/seo'
import Home from '../components/Header'
import Posts from '../components/PostNav/PostNav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import { graphql, Link } from 'gatsby'

library.add(faEnvelope)

export const query = graphql`
  {
    projects: allContentfulProjects {
      nodes {
        title
        slug
        heroImage {
          fluid(maxHeight: 1000, maxWidth: 1800, quality: 90) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

// const ProjectItem = ({ data: { portfolioItems } }) => (
//   <div>{JSON.stringify(data, null, 4)}</div>
// )

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <Home />
    <Skills />
    {/* <Posts /> */}
    {data.projects.nodes.map(project => (
      <div key={`project-${project.slug}`}>
        <Link to={`/${project.slug}`}>
          {project.title}
          <img alt={project.heroImage} src={project.heroImage} />
        </Link>
      </div>
    ))}
  </Layout>
)

export default IndexPage
