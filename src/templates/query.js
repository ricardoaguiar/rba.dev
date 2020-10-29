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