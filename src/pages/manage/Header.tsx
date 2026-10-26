import {
  Box,
  Center,
  createDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
} from "@hope-ui/solid"
import { TiThMenu } from "solid-icons/ti"
import { IoExit } from "solid-icons/io"
import { SwitchColorMode, SwitchLanguageWhite } from "~/components"
import { useFetch, useRouter, useT } from "~/hooks"
import { SideMenu } from "./SideMenu"
import { side_menu_items } from "./sidemenu_items"
import { handleResp, notify, r } from "~/utils"
import { clearUserData } from "~/utils/auth"
import { PResp } from "~/types"
import { tokens } from "~/app/tokens"
const { isOpen, onOpen, onClose } = createDisclosure()
const [logOutReqLoading, logOutReq] = useFetch(
  (): PResp<any> => r.get("/auth/logout"),
)

const Header = () => {
  const t = useT()
  const { to } = useRouter()
  const logOut = async () => {
    handleResp(await logOutReq(), () => {
      clearUserData()
      notify.success(t("manage.logout_success"))
      to(`/@login?redirect=${encodeURIComponent(location.pathname)}`)
    })
  }
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="$sticky"
      height="56px"
      flexShrink={0}
      shadow="none"
      px="$4"
      bgColor={tokens.bg}
      borderBottom={`1px solid ${tokens.border}`}
    >
      <Flex alignItems="center" justifyContent="space-between" h="$full">
        <HStack spacing="$2">
          <IconButton
            aria-label="menu"
            icon={<TiThMenu />}
            display={{ "@sm": "none" }}
            onClick={onOpen}
            size="sm"
          />
          <Heading
            fontSize="14px"
            fontWeight="600"
            letterSpacing="-0.04em"
            color={tokens.text}
            cursor="pointer"
            onClick={() => {
              to("/@manage")
            }}
          >
            BSpace
          </Heading>
        </HStack>
        <HStack spacing="$1">
          <IconButton
            aria-label="logout"
            icon={<IoExit />}
            loading={logOutReqLoading()}
            onClick={logOut}
            size="sm"
          />
        </HStack>
      </Flex>
      <Drawer opened={isOpen()} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={tokens.text}>BSpace</DrawerHeader>
          <DrawerBody>
            <SideMenu items={side_menu_items} />
            <Center>
              <HStack spacing="$4" p="$2" color="$neutral11">
                <SwitchLanguageWhite />
                <SwitchColorMode />
              </HStack>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export { Header, onClose }
