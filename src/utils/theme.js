import deepPurple from "@material-ui/core/colors/deepPurple";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";

const themeConfig = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: deepPurple,
    secondary: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
};


export default themeConfig;