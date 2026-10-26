import { globalCss, HopeThemeConfig } from "@hope-ui/solid"
import { tokens } from "./tokens"

const controlBase = {
  rounded: tokens.radius,
  border: `1px solid ${tokens.borderStrong}`,
  backgroundColor: tokens.surface,
  color: tokens.text,
  fontWeight: "500",
  fontSize: "13px",
  transition: tokens.transition,
  _hover: {
    borderColor: tokens.muted,
    backgroundColor: tokens.hover,
    color: tokens.text,
  },
  _active: {
    backgroundColor: tokens.surface,
  },
  _focus: {
    boxShadow: `0 0 0 1px ${tokens.focus}`,
    borderColor: tokens.focus,
  },
}

const theme: HopeThemeConfig = {
  initialColorMode: "dark",
  lightTheme: {
    colors: {
      background: tokens.bg,
      loContrast: tokens.bg,
      hiContrast: tokens.text,
    },
  },
  darkTheme: {
    colors: {
      background: tokens.bg,
      loContrast: tokens.bg,
      hiContrast: tokens.text,
      primary9: tokens.accent,
      primary10: tokens.accent,
      primary11: tokens.text,
      primary12: tokens.text,
      info9: tokens.text,
      info10: tokens.text,
      info11: tokens.text,
    },
  },
  components: {
    Button: {
      baseStyle: {
        root: {
          ...controlBase,
          height: "32px",
          px: "12px",
        },
      },
      defaultProps: {
        root: {
          colorScheme: "neutral",
          variant: "outline",
        },
      },
    },
    IconButton: {
      baseStyle: {
        ...controlBase,
        backgroundColor: "transparent",
      },
      defaultProps: {
        colorScheme: "neutral",
        variant: "outline",
      },
    },
    Input: {
      baseStyle: {
        input: {
          ...controlBase,
          height: "36px",
        },
      },
      defaultProps: {
        input: {
          variant: "filled",
        },
      },
    },
    Textarea: {
      baseStyle: {
        ...controlBase,
        resize: "vertical",
        wordBreak: "break-all",
      },
      defaultProps: {
        variant: "filled",
      },
    },
    Select: {
      baseStyle: {
        trigger: controlBase,
        content: {
          border: `1px solid ${tokens.border}`,
          backgroundColor: tokens.elevated,
          rounded: tokens.radius,
          boxShadow: "none",
        },
        optionIndicator: {
          color: tokens.text,
        },
      },
      defaultProps: {
        root: {
          variant: "filled",
        },
      },
    },
    Checkbox: {
      defaultProps: {
        root: {
          colorScheme: "neutral",
          variant: "filled",
        },
      },
    },
    Switch: {
      defaultProps: {
        root: {
          colorScheme: "neutral",
        },
      },
    },
    Menu: {
      baseStyle: {
        content: {
          rounded: tokens.radius,
          minW: "unset",
          border: `1px solid ${tokens.border}`,
          backgroundColor: tokens.elevated,
          boxShadow: "none",
        },
        item: {
          rounded: tokens.radiusSm,
          py: "$1_5",
          px: "$2_5",
          fontSize: "13px",
          transition: tokens.transition,
          _hover: {
            backgroundColor: tokens.hover,
          },
        },
      },
    },
    Notification: {
      baseStyle: {
        root: {
          rounded: tokens.radius,
          border: `1px solid ${tokens.border}`,
          backgroundColor: tokens.elevated,
        },
      },
    },
    Alert: {
      baseStyle: {
        root: {
          rounded: tokens.radius,
        },
      },
    },
    Anchor: {
      baseStyle: {
        rounded: tokens.radiusSm,
        px: "$1",
        py: "$0_5",
        transition: tokens.transition,
        _hover: {
          bgColor: tokens.hover,
          textDecoration: "none",
        },
        _focus: {
          boxShadow: "unset",
        },
      },
    },
    Modal: {
      baseStyle: {
        content: {
          rounded: tokens.radius,
          border: `1px solid ${tokens.border}`,
          backgroundColor: tokens.elevated,
          boxShadow: "none",
        },
      },
    },
  },
}

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: `${tokens.bg} !important`,
    color: `${tokens.text} !important`,
    fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important`,
    fontSize: "13px",
    letterSpacing: "-0.011em",
    WebkitFontSmoothing: "antialiased",
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: tokens.bg,
  },
  ".hope-breadcrumb__list": {
    flexWrap: "wrap",
    rowGap: "0 !important",
  },
  ".lightgallery-container": {
    "& .lg-backdrop": {
      zIndex: "$popover",
    },
    "& .lg-outer": {
      zIndex: "calc($popover + 10)",
    },
  },
  ".viselect-selection-area": {
    background: "rgba(255, 255, 255, 0.08)",
    border: `1px solid ${tokens.borderStrong}`,
  },
  ".viselect-container": {
    userSelect: "none",
    "& .viselect-item": {
      "-webkit-user-drag": "none",
      "& img": {
        "-webkit-user-drag": "none",
      },
    },
  },
  ".hope-table": {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    color: `${tokens.text} !important`,
    "& th": {
      backgroundColor: `${tokens.elevated} !important`,
      color: `${tokens.muted} !important`,
      borderColor: `${tokens.border} !important`,
      fontSize: "11px",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    },
    "& td": {
      borderColor: `${tokens.border} !important`,
      color: `${tokens.text} !important`,
      fontSize: "13px",
    },
    "& tr:hover td": {
      backgroundColor: `${tokens.hover} !important`,
    },
  },
  ".hope-table-container": {
    maxWidth: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: tokens.radius,
    border: `1px solid ${tokens.border}`,
  },
  ".list-item + .list-item, .list-item": {
    borderBottom: `1px solid ${tokens.border}`,
    borderRadius: "0 !important",
  },
  ".hope-kbd": {
    backgroundColor: `${tokens.surface} !important`,
    border: `1px solid ${tokens.borderStrong} !important`,
    color: `${tokens.muted} !important`,
    borderRadius: `${tokens.radiusSm} !important`,
    boxShadow: "none !important",
  },
})

export { theme }
