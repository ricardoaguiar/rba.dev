const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allContentfulProjects {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading page', JSON.stringify(result.errors))
  }

  result.data.allContentfulProjects.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.slug}/`,
      component: path.resolve('./src/templates/project-item-template.js'),
      context: {
        slug: node.slug
      }
    })
  })
}
