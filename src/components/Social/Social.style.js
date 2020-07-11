import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const SocialMediaMenu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  /* min-height: 100vh; */
  max-width: 10vw;
  background: #f40;
  margin: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2.5rem;
  padding: 1rem;
`

export const SocialMediaItem = styled.span`
  display: block;
  background: #fff;
`
export const linkedin = css`
  color: #fff;
  background: #2867b2;
`

export const github = css`
  color: #fff;
  background: #24292e;
`

export const twitter = css`
  color: #fff;
  background: #1da1f2;
`
export const instagram = css`
  color: #fff;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
`
