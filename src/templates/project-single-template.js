// import { graphql } from 'gatsby'
// import { BLOCKS, MARKS } from '@contentful/rich-text-types'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

// export const query = graphql`
//   query($slug: String!) {
//     project: contentfulPortfolioItem(slug: { eq: $slug }) {
//       id
//       title
//       projectDescription {
//         raw
//       }
//     }
//   }
// `

// const ProjectSinglePage = ({ data: { project } }) => {
//   ;<div>{documentToReactComponent(project.projectDescription.raw)}</div>
// }

// export default ProjectSinglePage

//query for a portfolio item rich text
// query MyQuery {
//   contentfulPortfolioItem {
//     id
//     title
//     projectDescription {
//       raw
//       references {
//         ... on ContentfulAsset {
//         contentful_id
//         file {
//           url
//           contentType
//         }
//       }
//     }
//   }
// }
// }
