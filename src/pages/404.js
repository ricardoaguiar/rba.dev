import React from "react"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"

import SEO from "../components/seo"
import NotFound from "../components/not-found"

const NotFoundPage = () => (
  <>
  <Wrapper>
    <Header />
    <SEO title="404: Not found" />
    <NotFound />
  </Wrapper>
  </>
)


export default NotFoundPage
