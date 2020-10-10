import React from "react"
import "./styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import BlogList from "../components/blog/blog-component"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

const Blog = () => (
  <>
    <Wrapper>
      <Header />
      <SEO title="404: Not found" />
      <BlogList />
      <Footer />
    </Wrapper>
  </>
)

export default Blog
