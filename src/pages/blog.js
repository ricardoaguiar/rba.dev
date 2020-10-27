import React from "react"
import "../css/styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import BlogList from "../components/blog/blog-component"

const Blog = () => (
  <>
    <Wrapper>
      <Nav />
      <SEO title="Blog" />
      <BlogList />
      <Footer />
    </Wrapper>
  </>
)

export default Blog
