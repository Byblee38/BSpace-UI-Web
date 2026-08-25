import { Box, Flex, Heading, HStack, Icon, VStack } from "@hope-ui/solid"
import {
  createMemo,
  createSignal,
  For,
  Match,
  Show,
  Switch,
  JSX,
} from "solid-js"
import { useRouter, useT } from "~/hooks"
import { BiSolidRightArrow } from "solid-icons/bi"
import { onClose } from "./Header"
import { UserMethods, UserRole } from "~/types"
import { me } from "~/store"
import { AnchorWithBase } from "~/components"
import { Link } from "@solidjs/router"
import { hoverColor, joinBase } from "~/utils"
import { IconTypes } from "solid-icons"

export interface SideMenuItemProps {
  title: string
  to: string
  icon?: IconTypes | ((props: { active?: boolean; style?: any }) => JSX.Element)
  children?: SideMenuItemProps[]
  role?: number
  external?: true
  refresh?: true
}

const SideMenuItem = (props: SideMenuItemProps) => {
  const ifShow = createMemo(() => {
    // 使用层级权限检查
    if (props.role !== undefined && !UserMethods.hasAccess(me(), props.role)) {
      return false
    }

    // 如果有子菜单项，检查是否有可见的子菜单项
    if (props.children) {
      const hasVisibleChildren = props.children.some((child) => {
        if (child.role !== undefined) {
          return UserMethods.hasAccess(me(), child.role)
        }
        return true
      })
      if (!hasVisibleChildren) {
        return false
      }
    }

    return true
  })
  return (
    <Switch fallback={<SideMenuItemWithTo {...props} />}>
      <Match when={!ifShow()}>{null}</Match>
      <Match when={props.children}>
        <SideMenuItemWithChildren {...props} />
      </Match>
    </Switch>
  )
}

const SideMenuItemWithTo = (props: SideMenuItemProps) => {
  const { pathname } = useRouter()
  const t = useT()
  const isActive = () => pathname() === props.to
  return (
    <AnchorWithBase
      cancelBase={props.to.startsWith("http")}
      display="flex"
      as={Link}
      href={props.to}
      onClick={(e: any) => {
        onClose()
        if (props.refresh) {
          e.stopPropagation?.()
          let to = props.to
          if (!to.startsWith("http")) {
            to = joinBase(to)
          }
          window.open(to, "_self")
        }
      }}
      w="$full"
      alignItems="center"
      style={{
        transition: "all 0.15s ease",
        border: isActive() ? "1px solid #38BDF8" : "1px solid transparent",
        "border-radius": "8px",
      }}
      _hover={{
        bgColor: "#1E2638",
        color: "#E2E8F0",
        textDecoration: "none",
      }}
      px="$3"
      py="$2"
      cursor="pointer"
      bgColor={isActive() ? "rgba(56, 189, 248, 0.12)" : "transparent"}
      color={isActive() ? "#38BDF8" : "#94A3B8"}
      external={props.external}
    >
      <HStack spacing="$2_5">
        <Show when={props.icon}>
          {typeof props.icon === "function" ? (
            props.icon({ active: isActive() })
          ) : (
            <Icon as={props.icon} boxSize="$4" />
          )}
        </Show>
        <Heading size="sm" fontWeight={isActive() ? "600" : "500"}>{t(props.title)}</Heading>
      </HStack>
    </AnchorWithBase>
  )
}

const SideMenuItemWithChildren = (props: SideMenuItemProps) => {
  const { pathname } = useRouter()
  const [open, setOpen] = createSignal(pathname().includes(props.to))
  const t = useT()

  // 检查是否有可见的子菜单项
  const hasVisibleChildren = createMemo(() => {
    if (!props.children) return false
    return props.children.some((child) => {
      if (child.role !== undefined) {
        return UserMethods.hasAccess(me(), child.role)
      }
      return true
    })
  })

  return (
    <Box w="$full">
      <Flex
        justifyContent="space-between"
        onClick={() => {
          setOpen(!open())
        }}
        w="$full"
        alignItems="center"
        style={{
          transition: "all 0.15s ease",
          "border-radius": "8px",
        }}
        _hover={{
          bgColor: "#1E2638",
          color: "#E2E8F0",
        }}
        px="$3"
        py="$2"
        cursor="pointer"
        color="#94A3B8"
      >
        <HStack spacing="$2_5">
          <Show when={props.icon}>
            {typeof props.icon === "function" ? (
              props.icon({ active: false })
            ) : (
              <Icon as={props.icon} boxSize="$4" />
            )}
          </Show>
          <Heading size="sm" fontWeight="500">{t(props.title)}</Heading>
        </HStack>
        <Icon
          as={BiSolidRightArrow}
          boxSize="$3"
          transform={open() ? "rotate(90deg)" : "none"}
          transition="transform 0.15s"
        />
      </Flex>
      <Show when={open() && hasVisibleChildren()}>
        <Box pl="$3" mt="$1">
          <SideMenu items={props.children!} />
        </Box>
      </Show>
    </Box>
  )
}

export const SideMenu = (props: { items: SideMenuItemProps[] }) => {
  return (
    <VStack p="$2" w="$full" color="$neutral11" spacing="$1">
      <For each={props.items}>
        {(item) => {
          return <SideMenuItem {...item} />
        }}
      </For>
    </VStack>
  )
}
