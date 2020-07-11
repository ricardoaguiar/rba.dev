import React, { useState, useRef } from "react"

import styled from "styled-components"
import Layout from "../Components/Layout.component"
import SEO from "../Components/Seo.component"
import Home from "../Components/Home/Home.component"
import Post from "../Components/Post.component"
import { useOnClickOutside } from "../Components/Hooks.component"
import { Burger, Menu } from "../Components"

const BurgerMenu = styled.div`
  left: 96vw;
  position: fixed;
  border: 1px solid tomato;
  background: var(--rbadev-mono-4-hex);
  height: 100vh;
  width: 4vw;
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
