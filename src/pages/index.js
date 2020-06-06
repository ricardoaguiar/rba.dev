import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

import Post from "../components/post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Post />
  </Layout>
)

export default IndexPage
