import React from "react"
import "../css/styles.css"
import Wrapper from "../components/wrapper/wrapper"
import AboutPage from "../components/about/about-component"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Nav from "../components/Nav"
library.add(fab)

const About = () => (
  <>
    <Wrapper>
      <Nav />
      <SEO title="About" />
      <AboutPage />
      <Footer />
    </Wrapper>
  </>
)

export default About
