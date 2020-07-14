import React, { useState, useRef } from "react"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"
import Home from "../components/home/home"
import Post from "../components/post/post"
import Footer from "../components/footer/footer"
import { useOnClickOutside } from "../components/hooks"
import Burger from "../components/burger/burger"
import Menu from "../components/menu/menu"

const BurgerMenu = styled.div`
  left: 0;
  position: fixed;
  background: transparent;
  height: 100vh;
  width: 2.95vw;
  z-index: 200;
`
const IndexPage = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <Wrapper>
        <SEO title="Home" />
        <BurgerMenu ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </BurgerMenu>
        <Home />
        <Post />
        <Footer />
      </Wrapper>
    </>
  )
}

export default IndexPage
