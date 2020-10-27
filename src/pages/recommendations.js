import React from "react"
import "../css/styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import Testimonials from "../components/recommendations/recomendations"
import Nav from "../components/Nav"

// what people say
const WPS = () => (
  <>
    <Wrapper>
      <Nav />
      <SEO title="Recommendations" />
      <Testimonials />
      <Footer />
    </Wrapper>
  </>
)

export default WPS
