import React from "react"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"
import Home from "../components/home/home"
import Post from "../components/post/post"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"

const IndexPage = () => {

  return (
    <>
      <Wrapper>
        <Header />
        <SEO title="Home" />
        <Home />
        <Post />
        <Footer />
      </Wrapper>
    </>
  )
}

export default IndexPage
