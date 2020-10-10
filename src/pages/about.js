import React from "react"
import "./styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"
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
      Something about this guy.
      <Footer />
    </Wrapper>
  </>
)

export default About
