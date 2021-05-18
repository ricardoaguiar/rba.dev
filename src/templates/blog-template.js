import React from 'react'
import styled from '@emotion/styled'
// import { graphql } from "gatsby"

const Blog = styled.div`
  height: 80vh;
  width: 80vw;
`

// export const query = graphql`
//   query($slug: String!) {
//     item: allContentfulPortfolioItem(slug: { eq: $slug }) {
//       edges {
//         node {
//           projectDescription {
//             raw
//           }
//           slug
//         }
//       }
//     }
//   }
// `

const BlogTemplate = () => {
  return (
    <Blog>
      <h2>return blog template</h2>
    </Blog>
  )
}

export default BlogTemplate
