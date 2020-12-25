import React from 'react'
import '../css/styles.css'
import Nav from '../components/Nav'
import SEO from '../components/seo'
import BlogList from '../components/Blog'
import Layout from '../components/Layout'

const Blog = () => (
  <Layout>
    <Nav />
    <SEO title='Blog' />
    <BlogList />
  </Layout>
)

export default Blog
