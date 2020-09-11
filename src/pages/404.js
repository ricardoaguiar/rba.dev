import React from "react"

import Header from "../components/header/header"

import SEO from "../components/seo"
import NotFound from "../components/not-found"

const NotFoundPage = () => (
  <>
    <Header />
    <SEO title="404: Not found" />
    <NotFound />
  </>
)


export default NotFoundPage
