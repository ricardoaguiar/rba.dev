import React from 'react'
import '../css/styles.css'
import SEO from '../components/seo'
import Home from '../components/Header'
import Posts from '../components/PostNav/PostNav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Contact from '../components/ContactForm/Contact'

library.add(faEnvelope)

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Home />
    <Skills />
    <Posts />
    <Contact />
  </Layout>
)

export default IndexPage
