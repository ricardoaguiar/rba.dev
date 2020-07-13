import React from "react"

import Layout from "../Components/Layout.component"
import SEO from "../Components/Seo.component"
import NotFound from "../Components/NotFound.component"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
