import * as React from "react"
import { Button } from "./button"

function Gatsby(props) {
  return (
    <Button href="https://www.gatsbyjs.org/" target="blank" id="gatsby">
      <svg
        aria-labelledby="gatsby"
        id="gatsby-svg"
        role="img"
        viewBox="0 0 28 28"
        style={{ height: 24 }}
        {...props}
      >
        <title id="gatsby-svg" lang="en">
          Built with Gatsby
        </title>
        <g transform="translate(399 -301)">
          <path fill="transparent" d="M-399 301h28v28h-28z" />
          <circle r={12} cy={315} cx={-385} fill="#639" />
          <g fill="#fff">
            <path d="M-391.686 321.686c-1.8-1.8-2.743-4.197-2.743-6.514l9.343 9.258c-2.4-.087-4.8-.946-6.6-2.744zM-382.943 324.172l-11.229-11.229c.943-4.199 4.714-7.371 9.171-7.371 3.171 0 5.914 1.543 7.628 3.854l-1.286 1.114c-1.457-1.973-3.771-3.257-6.343-3.257-3.343 0-6.171 2.143-7.286 5.143l9.856 9.857c2.484-.857 4.373-3 4.973-5.572h-4.111V315h6c0 4.457-3.173 8.229-7.373 9.172z" />
          </g>
        </g>
      </svg>
    </Button>
  )
}

const MemoGatsby = React.memo(Gatsby)
export default MemoGatsby
