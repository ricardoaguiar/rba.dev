import React from "react"
import styled from "@emotion/styled"

const RBA = styled.div`
  max-width: 50%;
  text-align: left;
  align-self: center;
  margin-left: 1em;

  & h4 {
    font-weight: 700;
    margin: 0;
    line-height: clamp(0.8, 0.9, 1);
  }
`
function Logo() {
  return (
    <RBA>
      <h4>RBA</h4>
      <h4>DEV</h4>
    </RBA>
  )
}

export default Logo
