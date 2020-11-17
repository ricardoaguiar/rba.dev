import React from "react"
import "../css/styles.css"
import AboutPage from "../components/About"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Nav from "../components/Nav"
import Layout from "../components/Layout"
library.add(fab)

const About = () => (
  <Layout>
    <Nav />
    <SEO title="About" />
    <AboutPage />
  </Layout>
)

export default About
