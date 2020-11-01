import * as React from "react"
import { Button } from "./button"

function Github(props) {
  return (
    <Button href="https://www.github.com/ricardoaguiar/" target="blank">
      <svg
        aria-labelledby="github"
        id="github-svg"
        role="img"
        viewBox="0 0 28 28"
        style={{ height: 23.5 }}
        {...props}
      >
        <title id="github-svg" lang="en">
          Built with Github
        </title>
        <path opacity={0.82} fill="none" d="M0 0h28v28H0z" />
        <path
          d="M14 2C7.205 2 1.696 7.394 1.696 14.048c0 5.322 3.525 9.838 8.414 11.431.615.11.84-.261.84-.58 0-.287-.011-1.044-.017-2.05-3.423.728-4.145-1.615-4.145-1.615-.56-1.392-1.366-1.762-1.366-1.762-1.117-.747.084-.732.084-.732 1.235.085 1.885 1.241 1.885 1.241 1.097 1.841 2.88 1.31 3.58 1.001.113-.778.43-1.309.782-1.61-2.732-.305-5.605-1.338-5.605-5.954 0-1.316.48-2.39 1.267-3.233-.127-.305-.55-1.53.12-3.188 0 0 1.033-.324 3.384 1.234.981-.267 2.034-.4 3.08-.405 1.045.005 2.098.138 3.08.405 2.35-1.558 3.38-1.234 3.38-1.234.672 1.658.25 2.883.123 3.188.789.842 1.265 1.917 1.265 3.233 0 4.628-2.877 5.646-5.618 5.944.442.372.835 1.107.835 2.232 0 1.61-.015 2.91-.015 3.304 0 .323.222.698.846.58 4.885-1.597 8.407-6.109 8.407-11.43C26.303 7.394 20.794 2 14 2"
          fill="#1b1817"
          fillRule="evenodd"
        />
      </svg>
    </Button>
  )
}

const MemoGithub = React.memo(Github)
export default MemoGithub
