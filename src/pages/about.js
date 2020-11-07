import React from "react"
import "../css/styles.css"
import AboutPage from "../components/About"
import Footer from "../components/Footer"
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
    <Footer />
  </Layout>
)

export default About
