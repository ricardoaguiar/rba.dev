import React from "react"
import "./styles.css"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"
import Home from "../components/home/home"
import Post from "../components/post/post"
import Footer from "../components/footer/footer"
// import Header from "../components/Header"
import Header from "../components/header/header"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
library.add(faEnvelope)

const IndexPage = () => {
  return (
    <Wrapper>
      <Header />
      <SEO title="Home" />
      <Home />
      <Post />
      <Footer />
    </Wrapper>
  )
}

export default IndexPage
