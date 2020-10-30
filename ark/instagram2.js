import React, { useState } from "react"
import { css } from "emotion"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialMediaMenu = () => {
  const [background, setBackground] = useState()

  const setStyle = background => {
    setBackground(background)
  }

  const Menu = css`
    background: ${background};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-direction: column;
    place-items: center;
    padding: 0.7rem;
    position: relative;
  `

  const github = css`
    color: var(--white);
    background: var(--git);
  `

  const twitter = css`
    color: var(--white);
    background: var(--twitter);
  `
  const instagram = css`
    color: var(--instagram);
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  `

  const SocialMediaIcon = styled.div`
    display: grid;
    cursor: pointer;
  `

  const linkedin = css`
    color: var(--white);
    background: var(--linkedin);
  `

  return (
    <nav className={Menu}>
      <a href="https://www.linkedin.com/in/jricardoaguiar/" target="blank">
        <SocialMediaIcon
          onMouseEnter={() => setStyle(`${linkedin}`)}
          onMouseOut={() => setStyle("#333")}
          className={css`
            color: var(--rbadev-mono-2-hex);
            &:hover {
              color: var(--white);
            }
          `}
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            size="2x"
            pointerEvents="none"
          />
        </SocialMediaIcon>
      </a>

      <a href="https://www.github.com/ricardoaguiar/" target="blank">
        <SocialMediaIcon
          onMouseEnter={() => setStyle(`${github}`)}
          onMouseOut={() => setStyle()}
          className={css`
            color: var(--rbadev-mono-2-hex);
            &:hover {
              color: var(--white);
            }
          `}
        >
          <FontAwesomeIcon
            icon={["fab", "github-square"]}
            size="2x"
            pointerEvents="none"
          />
        </SocialMediaIcon>
      </a>

      <a href="https://www.tiwtter.com/devrba" target="blank">
        <SocialMediaIcon
          onMouseEnter={() => setStyle(`${twitter}`)}
          onMouseOut={() => setStyle("var(--rbadev-mono-4-hex)")}
          className={css`
            color: var(--rbadev-mono-2-hex);
            &:hover {
              color: var(--white);
            }
          `}
        >
          <FontAwesomeIcon
            icon={["fab", "twitter-square"]}
            size="2x"
            pointerEvents="none"
          />
        </SocialMediaIcon>
      </a>

      <a href="https://www.instagram.com/ricardoaguiar/" target="blank">
        <SocialMediaIcon
          onMouseEnter={() => setStyle(`${instagram}`)}
          onMouseOut={() => setStyle("var(--rbadev-mono-4-hex)")}
          className={css`
            color: var(--rbadev-mono-2-hex);
            &:hover {
              color: var(--white);
            }
          `}
        >
          <FontAwesomeIcon
            icon={["fab", "instagram-square"]}
            size="2x"
            pointerEvents="none"
          />
        </SocialMediaIcon>
      </a>

      <a href="https://www.instagram.com/ricardoaguiar/" target="blank">
        <SocialMediaIcon
          onMouseEnter={() => setStyle(`${instagram}`)}
          onMouseOut={() => setStyle("var(--rbadev-mono-4-hex)")}
          className={css`
            color: var(--rbadev-mono-2-hex);
            &:hover {
              color: var(--white);
            }
          `}
        >
          <FontAwesomeIcon icon={"envelope"} size="2x" pointerEvents="none" />
        </SocialMediaIcon>
      </a>
    </nav>
  )
}

export default SocialMediaMenu