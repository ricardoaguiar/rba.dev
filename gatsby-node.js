const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allContentfulProjects {
        nodes {
          slug
        }
        group(field: projectStack, limit: 1000) {
          field
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading page", JSON.stringify(result.errors))
  }

  result.data.allContentfulProjects.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.slug}/`,
      component: require.resolve("./src/templates/portfolio-post.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
