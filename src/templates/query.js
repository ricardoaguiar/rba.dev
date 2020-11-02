 {
  contentfulPortfolio(slug: {eq: "seasony-dashboard"}) {
    id
    title
    author {
      name
      image {
        sizes(maxWidth: 100) {
          ...GatsbyContentfulSizes
        }
      }
    }
    slug
    tags
    portfolioDescription {
      json
    }
    body {
      body
    }
    publishDate
    updatedAt
    heroImage {
      fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid

      }
    }
    images {
      sizes(maxWidth: 800, toFormat: JPG) {
          ...GatsbyContentfulSizes
      }
    }
  }
}

        {console.log(assets.edges[0].node.images[0].fluid.src)}
        {console.log(assets.edges[0].node.images[0].title)}
        {console.log(assets.edges[0].node.images[0].id)}
        <PortfolioImage>
          <Img
            fluid={assets.edges[0].node.images[0].fluid}
            alt={assets.edges[0].node.images[0].title}
            key={assets.edges[0].node.images[0].id}
          />
        </PortfolioImage>
