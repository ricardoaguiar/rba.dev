import React from "react"
import "../css/styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"
import AboutPage from "../components/about/about-component"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

const About = () => (
  <>
    <Wrapper>
      <Header />
      <SEO title="About" />
      <AboutPage />
      <Footer />
    </Wrapper>
  </>
)

export default About
