import { alpha } from "@mui/material/styles";

// SETUP COLORS

export const contrastText = {
  white: "#FFFFFF",
  black: "#212B36",
};

const SECONDARY = {
  lighter: "#FEE9D1",
  light: "#FDAB76",
  main: "#FA541C",
  dark: "#B3200E",
  darker: "#770508",
  contrastText: contrastText.white,
};
const PRIMARY = {
  lighter: "#D2FCF4",
  light: "#77F0ED",
  main: "#22B8CF",
  dark: "#116E95",
  darker: "#063963",
  contrastText: contrastText.white,
};
const INFO = {
  lighter: "#CBFEFC",
  light: "#63E8F9",
  main: "#00B1ED",
  dark: "#0067AA",
  darker: "#003471",
  contrastText: contrastText.white,
};
const SUCCESS = {
  lighter: "#CDFCD1",
  light: "#69F290",
  main: "#0CD66E",
  dark: "#069A6B",
  darker: "#02665B",
  contrastText: contrastText.black,
};
const WARNING = {
  lighter: "#FFF8D1",
  light: "#FFE475",
  main: "#FFC81A",
  dark: "#B7860D",
  darker: "#7A5204",
  contrastText: contrastText.black,
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: contrastText.white,
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
};

const palette = {
  light: {
    ...COMMON,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: {
      secondary: "#f58634",
      paper: "#fff",
      default: "#fff",
    },
  },
 
};

export default palette;
