import React from "react"
import "../css/styles.css"
import SEO from "../components/seo"
import NotFound from "../components/FourOFour"
import Layout from "../components/Layout"

const FourOFour = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
)

export default FourOFour
