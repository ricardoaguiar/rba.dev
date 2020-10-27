import React from "react"
import "../css/styles.css"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"
import Home from "../components/hero/hero"
import Posts from "../components/posts/posts"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
library.add(faEnvelope)

export default function IndexPage() {
  return (
    <Wrapper>
      <Header />
      <SEO title="Home" />
      <Home />
      <Posts />
      <Footer />
    </Wrapper>
  )
}

// export default IndexPage
