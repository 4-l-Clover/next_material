import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      google: "#dc3e32",
      facebook: "#4267b2",
      linkedin: "#0077b7",
    },
    primary: {
      main: "#f26522",
    },
    secondary: {
      main: "#19857b",
    },
  },
});

export default theme;
