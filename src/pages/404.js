import React from "react"
import "../css/styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import NotFound from "../components/not-found"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

const FourOFour = () => (
  <>
    <Wrapper>
      <Header />
      <SEO title="404: Not found" />
      <NotFound />
      <Footer />
    </Wrapper>
  </>
)

export default FourOFour
