import React from 'react'
import '../css/styles.css'
import AboutPage from '../components/common/about'
import SEO from '../components/seo'
import Nav from '../components/common/nav'
import Layout from '../components/Layout'

const About = () => (
  <Layout>
    <Nav />
    <SEO title="About" />
    <AboutPage />
  </Layout>
)

export default About
