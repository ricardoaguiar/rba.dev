import React from "react"
import { HeaderContainer }  from "./header-styles"
// import { BurgerMenu } from "../../components/menu/menu-styled"
// import GitHub from "../../components/social/github"
// import Burger from "../../components/burger/burger"
// import Menu from "../../components/menu/menu"
// import Logo from "../../components/logo"
// import { useOnClickOutside } from "../../components/hooks"


const Header = () => {
  // const [open, setOpen] = useState(false)
  // const node = useRef()
  // useOnClickOutside(node, () => setOpen(false))

  return (
  
  <HeaderContainer>
        {/* <BurgerMenu ref={node}>
          <Logo />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <GitHub />
        </BurgerMenu> */}
 </HeaderContainer>
  )
}

export default Header
