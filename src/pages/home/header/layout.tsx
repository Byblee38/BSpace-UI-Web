import {
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@hope-ui/solid"
import { BsGridFill, BsCardImage } from "solid-icons/bs"
import { FaSolidListUl } from "solid-icons/fa"
import { Switch, Match, For } from "solid-js"
import { Dynamic } from "solid-js/web"
import { useT } from "~/hooks"
import { LayoutType, layout, setLayout } from "~/store"
import { tokens } from "~/app/tokens"

const layouts = {
  list: FaSolidListUl,
  grid: BsGridFill,
  image: BsCardImage,
} as const

export const Layout = () => {
  const t = useT()
  return (
    <Menu>
      <MenuTrigger
        as={IconButton}
        style={{
          "border-color": tokens.borderStrong,
          color: tokens.muted,
          "border-radius": tokens.radius,
          background: "transparent",
          border: `1px solid ${tokens.borderStrong}`,
          transition: tokens.transition,
        }}
        _hover={{
          borderColor: tokens.muted,
          color: tokens.text,
          background: tokens.hover,
        }}
        aria-label="switch layout"
        compact
        size="sm"
        icon={
          <Switch>
            <Match when={layout() === "list"}>
              <FaSolidListUl />
            </Match>
            <Match when={layout() === "grid"}>
              <BsGridFill />
            </Match>
            <Match when={layout() === "image"}>
              <BsCardImage />
            </Match>
          </Switch>
        }
      ></MenuTrigger>
      <MenuContent>
        <For each={Object.entries(layouts)}>
          {(item) => (
            <MenuItem
              icon={<Dynamic component={item[1]} />}
              onSelect={() => {
                setLayout(item[0] as LayoutType)
              }}
            >
              {t(`home.layouts.${item[0]}`)}
            </MenuItem>
          )}
        </For>
      </MenuContent>
    </Menu>
  )
}
