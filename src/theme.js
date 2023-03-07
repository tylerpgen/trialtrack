import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD700",
    },
    background: {
      default: "#1f0623",
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFD700",
          color: "white",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#1f0623",
          fontSize: "1.5rem",
          borderBottom: "1px solid #1f0623",
        },
      },
    },
  },
});

export default theme;
