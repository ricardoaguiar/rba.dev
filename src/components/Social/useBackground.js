import React from "react"

export function useBackground() {
  const [background, setBackground] = React.useState("whitesmoke")
  const setStyle = background => setBackground(background)

  return { background, setStyle }
}
