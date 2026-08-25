import { IconButton } from "@hope-ui/solid"
import { createContext, Show, useContext } from "solid-js"
import { AiOutlineCloudDownload } from "solid-icons/ai"
import { useLink, useT } from "~/hooks"
import { Obj } from "~/types"

type ShareViewContextValue = {
  allowDownload: () => boolean
}

export const ShareViewContext = createContext<ShareViewContextValue>()

export const useShareView = () => useContext(ShareViewContext)

export const ShareObjDownloadIcon = (props: { obj: Obj }) => {
  const share = useShareView()
  const t = useT()
  const { rawLink } = useLink()
  const href = () =>
    (props.obj as { download_url?: string }).download_url ||
    rawLink(props.obj, true)

  return (
    <Show when={share?.allowDownload() && !props.obj.is_dir}>
      <IconButton
        as="a"
        href={href()}
        target="_blank"
        size="sm"
        compact
        variant="ghost"
        colorScheme="accent"
        aria-label={t("share.download", undefined, "Download")}
        icon={<AiOutlineCloudDownload />}
        flexShrink={0}
        onMouseDown={(e: MouseEvent) => {
          e.stopPropagation()
        }}
        onClick={(e: MouseEvent) => {
          e.stopPropagation()
        }}
      />
    </Show>
  )
}
