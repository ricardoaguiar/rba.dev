import React, { useState, useRef } from "react"
import styled from "styled-components"
import Layout from "../Components/Layout"
import SEO from "../Components/Seo"
import Home from "../Components/Home/Home"
import Post from "../Components/Post/Post"
import { useOnClickOutside } from "../Components/Hooks"
import { Burger, Menu } from "../Components"

const BurgerMenu = styled.div`
  left: 0;
  position: fixed;
  /* outline: 4px dotted tomato; */
  /* background: var(--rbadev-mono-4-hex); */
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
