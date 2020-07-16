import React, { useState, useRef } from "react"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"
import Home from "../components/home/home"
import Post from "../components/post/post"
import Footer from "../components/footer/footer"
import { useOnClickOutside } from "../components/hooks"
import Burger from "../components/burger/burger"
import Menu from "../components/menu/menu"
import { BurgerMenu } from "../components/menu/menu-styled"
import Logo from "../components/logo"
import GitHub from "../components/social/github"

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <Wrapper>
        <SEO title="Home" />
        <BurgerMenu ref={node}>
          <Logo />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <GitHub />
        </BurgerMenu>
        <Home />
        <Post />
        <Footer />
      </Wrapper>
    </>
  )
}

export default IndexPage
