import { useColorModeValue } from "@hope-ui/solid"

export const hoverColor = () => "#1A1A1A"

export const alphaColor = (level: number, reverse = false) => {
  if (reverse) {
    return useColorModeValue(`$blackAlpha${level}`, `whiteAlpha${level}`)()
  }
  return useColorModeValue(`$whiteAlpha${level}`, `blackAlpha${level}`)()
}

export const alphaBgColor = () =>
  useColorModeValue("$whiteAlpha10", "$blackAlpha11")()
