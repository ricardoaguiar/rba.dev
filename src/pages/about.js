import React from "react"
import "../css/styles.css"
import AboutPage from "../components/About/About"
import SEO from "../components/seo"
import Nav from "../components/Nav/Nav"
import Layout from "../components/Layout"

const About = () => (
  <Layout>
    <Nav />
    <SEO title="About" />
    <AboutPage />
  </Layout>
)

export default About
