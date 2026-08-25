import {
  Center,
  ElementType,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  MenuTriggerProps,
  Spinner,
  useColorModeValue,
} from "@hope-ui/solid"
import { useI18n } from "@solid-primitives/i18n"
import { createSignal, For, Show } from "solid-js"
import { langMap, languages, loadedLangs, setLang } from "~/app/i18n"
// import { TbLanguageHiragana } from "solid-icons/tb";
import { IoLanguageOutline } from "solid-icons/io"
import { Portal } from "solid-js/web"

const [fetchingLang, setFetchingLang] = createSignal(false)

export const SwitchLanguage = () => null
export const SwitchLanguageWhite = () => null

