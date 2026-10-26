import { Box } from "@hope-ui/solid"
import { tokens } from "~/app/tokens"

interface LoginBgProps {
  useNewVersion: boolean
}

const LoginBg = (_props: LoginBgProps) => {
  return (
    <Box
      bgColor={tokens.bg}
      pos="fixed"
      top="0"
      left="0"
      overflow="hidden"
      zIndex="-1"
      w="100vw"
      h="100vh"
    />
  )
}

export default LoginBg
