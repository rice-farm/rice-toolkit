import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#37ad4c",
  primaryBright: "#a3e4ab",
  primaryDark: "#257733",
  secondary: "#58C46B",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  secondary: "#41d60d",
  text: "#08a029",
  textDisabled: "#BDC2C4",
  textSubtle: "#666666",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #DFFEC6 0%, #C4FB97 100%)",
    violet: "linear-gradient(180deg, #EDF9FF 0%, #b8e5fa 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#41d60d",
  background: "#17201F",
  backgroundDisabled: "#2c6500",
  backgroundAlt: "#354341",
  contrast: "#FFFFFF",
  dropdown: "#071917",
  invertedContrast: "#071917",
  input: "#38544F",
  inputSecondary: "#4B8378",
  primaryDark: "#00B26F",
  tertiary: "#001f05",
  text: "#DFFCF2",
  textDisabled: "#5F716A",
  textSubtle: "#CCCCCC",
  borderColor: "#425B57",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #3D6F68 0%, #295650 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #295650 0%, #3D6F68 100%)",
    cardHeader: "linear-gradient(166.77deg, #4C6B64 0%, #35514B 100%)",
    blue: "linear-gradient(180deg, #339F7E 0%, #17956F 100%)",
    violet: "linear-gradient(180deg, #66AAC1 0%, #408BA4 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
