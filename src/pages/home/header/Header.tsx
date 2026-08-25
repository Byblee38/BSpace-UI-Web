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
import { getSetting, local, me, objStore, selectAll, State, toggleCheckbox, userCan } from "~/store"
import { BsSearch, BsPlusLg, BsFolderPlus } from "solid-icons/bs"
import { AiOutlineCloudUpload, AiOutlineSetting } from "solid-icons/ai"
import { RiSystemRefreshLine } from "solid-icons/ri"
import { IoMagnetOutline } from "solid-icons/io"
import { TbCheckbox } from "solid-icons/tb"
import { BiSolidBookContent } from "solid-icons/bi"
import { CgMoreO } from "solid-icons/cg"
import { Link } from "@solidjs/router"
import { AnchorWithBase, CenterLoading, isTocVisible, setTocDisabled } from "~/components"
import { Container } from "../Container"
import { bus, joinBase } from "~/utils"
import { Layout } from "./layout"
import { isMac } from "~/utils/compatibility"
import { usePath, useT } from "~/hooks"
import { UserMethods } from "~/types"

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

  const headerBtnStyle = {
    "border-color": "#262F40",
    color: "#94A3B8",
    "border-radius": "8px",
    background: "rgba(22, 27, 38, 0.8)",
    border: "1px solid #262F40",
    transition: "all 0.15s ease",
  }

  const headerBtnHover = {
    borderColor: "#38BDF8",
    color: "#38BDF8",
    background: "#1E2638",
  }

  return (
    <Center
      {...stickyProps}
      bgColor="$background"
      class="header"
      w="$full"
      style={{
        "border-bottom": "1px solid #262F40",
        "backdrop-filter": "blur(12px)",
      }}
    >
      <Container>
        <HStack
          px="calc(2% + 0.5rem)"
          py="$2_5"
          w="$full"
          justifyContent="space-between"
        >
          <HStack class="header-left" h="44px" cursor="pointer" onClick={() => location.href = "/"}>
            <Image
              src={logo()!}
              h="$full"
              w="auto"
              fallback={<Heading size="lg" color="#38BDF8">BySpace</Heading>}
            />
          </HStack>
          <HStack class="header-right" spacing="$2">
            <Show when={objStore.state === State.Folder}>
              <Show when={getSetting("search_index") !== "none"}>
                <HStack
                  w="$32"
                  p="$1"
                  rounded="8px"
                  justifyContent="space-between"
                  border="1px solid #262F40"
                  cursor="pointer"
                  color="#94A3B8"
                  style={{
                    backgroundColor: "#161B26",
                  }}
                  _hover={{
                    borderColor: "#38BDF8",
                    color: "#E2E8F0",
                    backgroundColor: "#1E2638",
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

              {/* Grouped Actions Section Menu Dropdown */}
              <Menu>
                <MenuTrigger
                  as={IconButton}
                  compact
                  size="lg"
                  aria-label="Actions"
                  icon={<CgMoreO />}
                  style={headerBtnStyle}
                  _hover={headerBtnHover}
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
                  <MenuItem
                    icon={<TbCheckbox />}
                    onSelect={toggleCheckbox}
                  >
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
                variant="outline"
                colorScheme="neutral"
                style={{
                  "border-color": "#262F40",
                  color: "#94A3B8",
                  "border-radius": "8px",
                  padding: "0 14px",
                  height: "36px",
                  "font-size": "13px",
                  "font-weight": "500",
                  background: "rgba(22, 27, 38, 0.8)",
                  border: "1px solid #262F40",
                  transition: "all 0.15s ease",
                }}
                _hover={{
                  borderColor: "#38BDF8",
                  color: "#E2E8F0",
                  background: "#1E2638",
                }}
              >
                {t(UserMethods.is_guest(me()) ? "login.login" : "home.footer.manage")}
              </Button>
            </AnchorWithBase>
          </HStack>
        </HStack>
      </Container>
    </Center>
  )
}


