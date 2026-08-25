import { globalCss, HopeThemeConfig } from "@hope-ui/solid"

const theme: HopeThemeConfig = {
  initialColorMode: "dark",
  lightTheme: {
    colors: {
      background: "#0B0F17",
      surface: "#161B26",
      border: "#262F40",
      textPrimary: "#E2E8F0",
      textSecondary: "#94A3B8",
      accent: "#38BDF8",
      hover: "#1E2638",
    },
  },
  darkTheme: {
    colors: {
      background: "#0B0F17",
      surface: "#161B26",
      border: "#262F40",
      textPrimary: "#E2E8F0",
      textSecondary: "#94A3B8",
      accent: "#38BDF8",
      hover: "#1E2638",
    },
  },
  components: {
    Button: {
      baseStyle: {
        root: {
          rounded: "8px",
          fontWeight: "500",
          fontSize: "13px",
          border: "1px solid #262F40",
          backgroundColor: "rgba(22, 27, 38, 0.8)",
          color: "#94A3B8",
          transition: "all 0.15s ease",
          _hover: {
            borderColor: "#38BDF8",
            color: "#E2E8F0",
            backgroundColor: "#1E2638",
          },
          _active: {
            transform: "scale(.97)",
          },
          _focus: {
            boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.2)",
          },
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
        rounded: "8px",
        border: "1px solid #262F40",
        backgroundColor: "rgba(22, 27, 38, 0.8)",
        color: "#94A3B8",
        transition: "all 0.15s ease",
        _hover: {
          borderColor: "#38BDF8",
          color: "#38BDF8",
          backgroundColor: "#1E2638",
        },
        _active: {
          transform: "scale(.97)",
        },
      },
      defaultProps: {
        colorScheme: "neutral",
        variant: "outline",
      },
    },
    Input: {
      baseStyle: {
        input: {
          rounded: "8px",
          border: "1px solid #262F40",
          backgroundColor: "#161B26",
          color: "#E2E8F0",
          transition: "all 0.15s ease",
          _focus: {
            boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.2)",
            borderColor: "#38BDF8",
          },
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
        rounded: "8px",
        border: "1px solid #262F40",
        backgroundColor: "#161B26",
        color: "#E2E8F0",
        transition: "all 0.15s ease",
        _focus: {
          boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.2)",
          borderColor: "#38BDF8",
        },
        resize: "vertical",
        wordBreak: "break-all",
      },
      defaultProps: {
        variant: "filled",
      },
    },
    Select: {
      baseStyle: {
        trigger: {
          rounded: "8px",
          border: "1px solid #262F40",
          backgroundColor: "#161B26",
          color: "#E2E8F0",
          _focus: {
            boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.2)",
            borderColor: "#38BDF8",
          },
        },
        content: {
          border: "1px solid #262F40",
          backgroundColor: "#161B26",
          rounded: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        },
        optionIndicator: {
          color: "#38BDF8",
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
          colorScheme: "info",
          variant: "filled",
        },
      },
    },
    Switch: {
      defaultProps: {
        root: {
          colorScheme: "info",
        },
      },
    },
    Menu: {
      baseStyle: {
        content: {
          rounded: "12px",
          minW: "unset",
          border: "1px solid #262F40",
          backgroundColor: "#161B26",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)",
        },
        item: {
          rounded: "8px",
          py: "$1_5",
          px: "$2_5",
          transition: "all 0.15s ease",
          _hover: {
            backgroundColor: "#1E2638",
          },
        },
      },
    },
    Notification: {
      baseStyle: {
        root: {
          rounded: "12px",
          border: "1px solid #262F40",
          backgroundColor: "#161B26",
        },
      },
    },
    Alert: {
      baseStyle: {
        root: {
          rounded: "12px",
        },
      },
    },
    Anchor: {
      baseStyle: {
        rounded: "8px",
        px: "$1_5",
        py: "$1",
        transition: "all 0.15s ease",
        _hover: {
          bgColor: "#1E2638",
          textDecoration: "none",
        },
        _focus: {
          boxShadow: "unset",
        },
        _active: { transform: "scale(.97)", transition: "0.15s" },
      },
    },
    Modal: {
      baseStyle: {
        content: {
          rounded: "16px",
          border: "1px solid #262F40",
          backgroundColor: "#161B26",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
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
    backgroundColor: "#0B0F17 !important",
    color: "#E2E8F0 !important",
    fontFamily: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important`,
    letterSpacing: "-0.01em",
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#0B0F17",
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
    background: "rgba(56, 189, 248, 0.15)",
    border: "1px solid rgba(56, 189, 248, 0.8)",
    borderRadius: "6px",
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
    color: "#E2E8F0 !important",
    "& th": {
      backgroundColor: "#161B26 !important",
      color: "#94A3B8 !important",
      borderColor: "#262F40 !important",
      fontSize: "0.85rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.03em",
    },
    "& td": {
      borderColor: "#262F40 !important",
      color: "#E2E8F0 !important",
      fontSize: "0.875rem",
    },
    "& tr:hover td": {
      backgroundColor: "#1E2638 !important",
    },
  },
  ".hope-table-container": {
    maxWidth: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "12px",
    border: "1px solid #262F40",
  },
})

export { theme }

