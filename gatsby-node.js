const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      post: allContentfulAsset {
        edges {
          node {
            id
            description
          }
        }
      }
      pages: allSitePage {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  data.post.edges.forEach(({ node }) => {
    createPage({
      path: `post/${node.slug}`,
      component: path.resolve("src/templates/blog-post.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.pages.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: path.resolve("src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
