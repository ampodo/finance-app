export const tokens = {
    grey: {
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#b3b6c2",
      600: "#8f929b",
      700: "#6b6d74",
      800: "#48494e",
      900: "#242427",
    },
    primary: {
      // light blue
      100: "#c3eaff",
      200: "#97d8f7",
      300: "#6ac1f3",
      400: "#3caaf0",
      500: "#0f92ed",
      600: "#0b6fa9",
      700: "#084c65",
      800: "#042931",
      900: "#000c00",
    },
    secondary: {
      // light orange
      100: "#ffe3cc",
      200: "#ffc799",
      300: "#ffaf66",
      400: "#ff9833",
      500: "#ff8000",
      600: "#cc6600",
      700: "#994d00",
      800: "#663300",
      900: "#331a00",
    },
    tertiary: {
      // silver
      500: "#abadba",
    },
    background: {
      light: "#2d2d34",
      main: "#1f2026",
    },
  };
   
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      common: {
        black: "#000",
        white: "#fff",
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
      text: {
        primary: '#d1d3da',
        secondary: '#000000',
      }
     
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  };

