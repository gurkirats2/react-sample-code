import { createTheme } from "@mui/material";
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primaryLight: true;
    secondaryLight: true;
    white: true;
    skyBlue: true;
    black: true;
    navyBlue: true;
    lightGray: true;
    yellowishLight: true;
  }
}
declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    skyBlue: Palette["primary"];
    black: Palette["primary"];
    navyBlue: Palette["primary"];
    lightGray: PaletteOptions["primary"];
    secondaryLight: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    white: PaletteOptions["primary"];
    skyBlue: PaletteOptions["primary"];
    black: PaletteOptions["primary"];
    navyBlue: PaletteOptions["primary"];
    lightGray: PaletteOptions["primary"];
    secondaryLight: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 1024,
      lg: 1200,
      xl: 1500,
    },
  },
  palette: {
    primary: {
      light: "",
      main: "#3AB7F7",
      dark: "#0366cdd9",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FF9A1F",
      main: "#004AAD",
      dark: "#336EBD",
      contrastText: "#fff",
    },
    secondaryLight: {
      light: "#FF9A1F",
      main: "#336EBD",
      dark: "#004AAD",
      contrastText: "#fff",
    },
    error: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    white: {
      main: "#fff",
    },
    skyBlue: {
      main: "#F2F6FB",
    },
    black: {
      main: "#000",
    },
    navyBlue: {
      main: "#336EBD",
    },
    lightGray: {
      main: "#E6EEF7",
      dark: "#216fc536",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Anek Bangla", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "inherit",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
          margin: 0,
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "18px",
          fontWeight: 500,
          borderRadius: "999px",
          padding: "0.8rem 2rem",
        },
      },
    },
  },
});
