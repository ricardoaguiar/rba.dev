import React from "react"
import "./styles.css"
import Wrapper from "../components/wrapper/wrapper"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import Testimonials from "../components/recommendations/recommendations-component"

// what people say
const WPS = () => (
  <>
    <Wrapper>
      <Header />
      <SEO title="Recommendations" />
      <Testimonials />
      <Footer />
    </Wrapper>
  </>
)

export default WPS
