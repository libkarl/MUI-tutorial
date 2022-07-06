import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#00adb5",
  secondary: "#95defb",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

// styled overides for component 

const theme = createTheme({
    // vytvoření možnosti pro výběr jiné než default color pro tento komponent
    // barvu pro primary a secondary vybírám z konstanty ve, které mám možnosti
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary
        
        }
    },
    // zrušení modrého podtržení pro odkaz
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        }
    }
});

export default theme;