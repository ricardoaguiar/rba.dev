import React from 'react'
import '../css/styles.css'
import SEO from '../components/seo'
import Testimonials from '../components/Recommendations/Recommendations'
import Nav from '../components/common/nav'
import Layout from '../components/Layout'

const WPS = () => (
  <Layout>
    <Nav />
    <SEO title="Recommendations" />
    <Testimonials />
  </Layout>
)

export default WPS
