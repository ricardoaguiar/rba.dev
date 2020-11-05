import React from "react"
import "../css/styles.css"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import Testimonials from "../components/Recomendations"
import Nav from "../components/Nav"
import Layout from "../components/Layout"

// what people say
const WPS = () => (
  <Layout>
    <Nav />
    <SEO title="Recommendations" />
    <Testimonials />
    <Footer />
  </Layout>
)

export default WPS
