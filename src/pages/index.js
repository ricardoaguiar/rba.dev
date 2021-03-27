import React from 'react'
import '../css/styles.css'
import SEO from '../components/seo'
import Home from '../components/common/header'
import Posts from '../components/PostNav/PostNav'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  FaEnvelope,
  FaGrinStars,
  FaGithubSquare,
  FaLinkedin,
  FaCogs,
  FaComments,
  FaUser,
  FaRegThumbsUp,
  FaWordpress,
} from 'react-icons/fa'
import Layout from '../components/Layout'
import Skills from '../components/common/skills'

library.add(
  FaEnvelope,
  FaGrinStars,
  FaGithubSquare,
  FaLinkedin,
  FaCogs,
  FaComments,
  FaUser,
  FaRegThumbsUp,
  FaWordpress
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Skills />
    <Posts />
  </Layout>
)

export default IndexPage
