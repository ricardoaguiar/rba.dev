import React from "react"
import styled from "@emotion/styled"
import ricardo from "../assets/ricardo.png"

const Portrait = styled.img`
  width: 200px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  right: 0;
`
export default function Ricardo() {
  return <Portrait src={ricardo} alt="Ricardo" />
}
