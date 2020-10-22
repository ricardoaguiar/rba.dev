const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allContentfulPortfolio {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading page", JSON.stringify(result.errors))
  }

  result.data.allContentfulPortfolio.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.slug}/`,
      component: require.resolve("./src/templates/portfolio-post.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
