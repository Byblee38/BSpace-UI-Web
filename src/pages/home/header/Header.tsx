import {
  HStack,
  useColorModeValue,
  Image,
  Center,
  Icon,
  Kbd,
  CenterProps,
  IconButton,
  Button,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Heading,
} from "@hope-ui/solid"
import { Show, createMemo } from "solid-js"
import {
  getSetting,
  local,
  me,
  objStore,
  State,
  toggleCheckbox,
  userCan,
} from "~/store"
import { BsSearch, BsPlusLg, BsFolderPlus } from "solid-icons/bs"
import { AiOutlineCloudUpload, AiOutlineSetting } from "solid-icons/ai"
import { RiSystemRefreshLine } from "solid-icons/ri"
import { IoMagnetOutline } from "solid-icons/io"
import { TbCheckbox } from "solid-icons/tb"
import { BiSolidBookContent } from "solid-icons/bi"
import { CgMoreO } from "solid-icons/cg"
import { Link } from "@solidjs/router"
import { AnchorWithBase, isTocVisible, setTocDisabled } from "~/components"
import { Container } from "../Container"
import { bus, joinBase } from "~/utils"
import { Layout } from "./layout"
import { isMac } from "~/utils/compatibility"
import { usePath, useT } from "~/hooks"
import { UserMethods } from "~/types"
import { tokens } from "~/app/tokens"

export const Header = () => {
  const t = useT()
  const { refresh } = usePath()
  const logos = getSetting("logo").split("\n")
  const defaultLogo =
    !logos[0] ||
    logos[0] === "https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg"
      ? joinBase("/logo.webp")
      : logos[0]
  const logo = useColorModeValue(
    defaultLogo,
    !logos[logos.length - 1] ||
      logos[logos.length - 1] ===
        "https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg"
      ? joinBase("/logo.webp")
      : logos[logos.length - 1] || defaultLogo,
  )

  const stickyProps = createMemo<CenterProps>(() => {
    switch (local["position_of_header_navbar"]) {
      case "sticky":
        return { position: "sticky", zIndex: "$sticky", top: 0 }
      default:
        return { position: undefined, zIndex: undefined, top: undefined }
    }
  })

  const iconBtnStyle = {
    "border-color": tokens.borderStrong,
    color: tokens.muted,
    "border-radius": tokens.radius,
    background: "transparent",
    border: `1px solid ${tokens.borderStrong}`,
    transition: tokens.transition,
  }

  const iconBtnHover = {
    borderColor: tokens.muted,
    color: tokens.text,
    background: tokens.hover,
  }

  return (
    <Center
      {...stickyProps}
      bgColor={tokens.bg}
      class="header"
      w="$full"
      style={{
        "border-bottom": `1px solid ${tokens.border}`,
      }}
    >
      <Container>
        <HStack
          px="calc(2% + 0.5rem)"
          py="$2"
          w="$full"
          h="56px"
          justifyContent="space-between"
        >
          <HStack
            class="header-left"
            h="28px"
            cursor="pointer"
            alignItems="center"
            spacing="$2"
            onClick={() => (location.href = "/")}
          >
            <Image
              src={logo()!}
              h="$full"
              w="auto"
              fallback={
                <Heading
                  size="md"
                  color={tokens.text}
                  fontWeight="600"
                  letterSpacing="-0.04em"
                >
                  BSpace
                </Heading>
              }
            />
          </HStack>
          <HStack class="header-right" spacing="$2">
            <Show when={objStore.state === State.Folder}>
              <Show when={getSetting("search_index") !== "none"}>
                <HStack
                  w="$32"
                  p="$1"
                  rounded={tokens.radius}
                  justifyContent="space-between"
                  border={`1px solid ${tokens.borderStrong}`}
                  cursor="pointer"
                  color={tokens.muted}
                  style={{
                    backgroundColor: tokens.surface,
                    height: "32px",
                    padding: "0 8px",
                  }}
                  _hover={{
                    borderColor: tokens.muted,
                    color: tokens.text,
                    backgroundColor: tokens.hover,
                  }}
                  onClick={() => {
                    bus.emit("tool", "search")
                  }}
                >
                  <Icon as={BsSearch} />
                  <HStack>
                    {isMac ? <Kbd>Cmd</Kbd> : <Kbd>Ctrl</Kbd>}
                    <Kbd>K</Kbd>
                  </HStack>
                </HStack>
              </Show>

              <Menu>
                <MenuTrigger
                  as={IconButton}
                  compact
                  size="sm"
                  aria-label="Actions"
                  icon={<CgMoreO />}
                  style={iconBtnStyle}
                  _hover={iconBtnHover}
                />
                <MenuContent>
                  <Show when={userCan("write") || objStore.write}>
                    <MenuItem
                      icon={<RiSystemRefreshLine />}
                      onSelect={() => refresh(undefined, true)}
                    >
                      {t("home.toolbar.refresh")}
                    </MenuItem>
                    <MenuItem
                      icon={<AiOutlineCloudUpload />}
                      onSelect={() => bus.emit("tool", "upload")}
                    >
                      {t("home.toolbar.upload")}
                    </MenuItem>
                    <MenuItem
                      icon={<BsPlusLg />}
                      onSelect={() => bus.emit("tool", "new_file")}
                    >
                      {t("home.toolbar.new_file")}
                    </MenuItem>
                    <MenuItem
                      icon={<BsFolderPlus />}
                      onSelect={() => bus.emit("tool", "mkdir")}
                    >
                      {t("home.toolbar.mkdir")}
                    </MenuItem>
                  </Show>
                  <Show when={userCan("offline_download")}>
                    <MenuItem
                      icon={<IoMagnetOutline />}
                      onSelect={() => bus.emit("tool", "offline_download")}
                    >
                      {t("home.toolbar.offline_download")}
                    </MenuItem>
                  </Show>
                  <Show when={isTocVisible()}>
                    <MenuItem
                      icon={<BiSolidBookContent />}
                      onSelect={() => setTocDisabled((disabled) => !disabled)}
                    >
                      {t("home.toolbar.toggle_markdown_toc")}
                    </MenuItem>
                  </Show>
                  <MenuItem icon={<TbCheckbox />} onSelect={toggleCheckbox}>
                    {t("home.toolbar.toggle_checkbox")}
                  </MenuItem>
                  <MenuItem
                    icon={<AiOutlineSetting />}
                    onSelect={() => bus.emit("tool", "local_settings")}
                  >
                    {t("home.toolbar.local_settings")}
                  </MenuItem>
                </MenuContent>
              </Menu>

              <Layout />
            </Show>
            <AnchorWithBase
              as={Link}
              href={UserMethods.is_guest(me()) ? "/@login" : "/@manage"}
              style={{ "text-decoration": "none" }}
            >
              <Button
                size="sm"
                style={{
                  "border-radius": tokens.radius,
                  padding: "0 12px",
                  height: "32px",
                  "font-size": "13px",
                  "font-weight": "500",
                  background: tokens.accent,
                  color: tokens.accentFg,
                  border: "1px solid transparent",
                  transition: tokens.transition,
                }}
                _hover={{
                  background: "#EAEAEA",
                  color: tokens.accentFg,
                }}
              >
                {t(
                  UserMethods.is_guest(me())
                    ? "login.login"
                    : "home.footer.manage",
                )}
              </Button>
            </AnchorWithBase>
          </HStack>
        </HStack>
      </Container>
    </Center>
  )
}
