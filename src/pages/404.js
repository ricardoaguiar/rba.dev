import React from "react"
import "../css/styles.css"
import SEO from "../components/seo"
import NotFound from "../components/FourOFour"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/Layout"
library.add(fab)

const FourOFour = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
)

export default FourOFour
