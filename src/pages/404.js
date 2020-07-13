import React from "react"

import Wrapper from "../components/wrapper/wrapper"
import SEO from "../components/Seo"
import NotFound from "../components/NotFound"

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <NotFound />
  </Wrapper>
)

export default NotFoundPage
