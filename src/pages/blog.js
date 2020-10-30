import React from "react"
import "../css/styles.css"
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import BlogList from "../components/Blog"

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
