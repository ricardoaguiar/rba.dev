import React from "react"
import styled from "@emotion/styled"

const RBA = styled.div`
  /* margin: calc(1em - 10%); */
  /* background: var(--rbadev-duotone-3-hex); */
  max-width: 50%;
  /* padding: 2px; */
  text-align: center;
  border-radius: 2px;
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & h3 {
    font-weight: 800;
    margin: 0;
    line-height: calc(100% - 20%);
  }
`

function Logo() {
  return (
    <RBA>
      <h3>RBA</h3>
      <h3>DEV</h3>
    </RBA>
  )
}

export default Logo
