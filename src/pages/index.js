import React, { useState, useRef } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/Seo"
import Home from "../components/Home/Home"
import Post from "../components/Post/Post"
import { useOnClickOutside } from "../components/Hooks"
import Burger from "../components/Burger/Burger"
import Menu from "../components/Menu/Menu"

const BurgerMenu = styled.div`
  left: 0;
  position: fixed;
  background: #8765;
  height: 100vh;
  width: 2.95vw;
  z-index: 200;
`
const IndexPage = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <Layout>
      <SEO title="Home" />
      <BurgerMenu ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </BurgerMenu>
      <Home />
      <Post />
    </Layout>
  )
}

export default IndexPage
