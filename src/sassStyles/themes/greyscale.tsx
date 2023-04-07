import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const greyscale = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: grey[200],
    },
  },
});

export default greyscale;
