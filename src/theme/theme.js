/* eslint-disable no-unused-vars */

import { extendTheme } from "@chakra-ui/react";
import "@fontsource/gabarito";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        letterSpacing: "0.5px",
        // color: props.colorMode === 'dark' ? 'whiteAlpha.900' : '#2F3645',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontSize: "sm",
        borderRadius: 'md',
      },
      sizes: {
        lg: {
          h: '48px',
          fontSize: 'md',
          px: '24px',
        },
      },
      variants: {
        solid: {
          bg: 'green.2',
          letterSpacing: "1px",
          color: 'white',
          _hover: {
            bg: 'green.3',
          },
          _active: {
            bg: 'green.3',
          },
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  },
  fonts: {
    heading: `'Gabarito', sans-serif`,
    body: `'Gabarito', sans-serif`,
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    green: {
      1: "#06D001",
      2: "#399918",
      3: "#185519"
    },
    blue: {
      1: "#B4D3FB",
      2: "#478CCF",
      3: "#0075FF"
    },
    dark: {
      1: "#2F3645",
      2: "#1A1F37"
    },
    white: {
      1: "#F0F2F5",
      2: "#FBFBFB"
    }
  },
})
export default theme;
