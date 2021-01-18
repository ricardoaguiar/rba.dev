import React from "react"
import "../css/styles.css"
import SEO from "../components/seo"
import Home from "../components/Header"
import Posts from "../components/PostNav/PostNav"
import { library } from "@fortawesome/fontawesome-svg-core"
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
} from "react-icons/fa"
import Layout from "../components/Layout"
import Contact from "../components/ContactForm/Contact"
import Skills from "../components/Skills"

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
    <Contact />
  </Layout>
)

export default IndexPage
