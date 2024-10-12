import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[900],
        },
        secondary: {
          light: "#637bfe30",
          main: "#304ffe",
          contrastText: "#121212",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: blue[400],
        },
        secondary: {
          light: "#535da830",
          main: "#283593",
        },
      },
    },
  },
});
