import React from "react"
import "../css/styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import NotFound from "../components/FourOFour"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Nav from "../components/Nav"
library.add(fab)

const FourOFour = () => (
  <>
    <Wrapper>
      <Nav />
      <SEO title="404: Not found" />
      <NotFound />
      <Footer />
    </Wrapper>
  </>
)

export default FourOFour
