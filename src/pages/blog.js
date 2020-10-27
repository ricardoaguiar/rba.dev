import React from "react"
import "../css/styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import BlogList from "../components/blog/blog-component"

const Blog = () => (
  <>
    <Wrapper>
      <Header />
      <SEO title="Blog" />
      <BlogList />
      <Footer />
    </Wrapper>
  </>
)

export default Blog
