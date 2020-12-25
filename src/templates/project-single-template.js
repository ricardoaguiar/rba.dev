import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export const query = graphql`
  query($slug: String!) {
    project: contentfulPortfolioItem(slug: { eq: $slug }) {
      id
      title
      projectDescription {
        raw
      }
    }
  }
`

const ProjectSinglePage = ({ data: { project } }) => {
  // ;<div>{documentToReactComponent(project.projectDescription.raw)}</div>
}

export default ProjectSinglePage
