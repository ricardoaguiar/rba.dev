import React from "react"
import "../css/styles.css"
import SEO from "../components/seo"
import Home from "../components/Header"
import Posts from "../components/PostsNav"
import Footer from "../components/Footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Nav from "../components/Nav"
import Layout from "../components/Layout"

library.add(faEnvelope)

export default function IndexPage() {
  return (
    <Layout>
      <Nav />
      <SEO title="Home" />
      <Home />
      <Posts />
    </Layout>
  )
}

// export default IndexPage
