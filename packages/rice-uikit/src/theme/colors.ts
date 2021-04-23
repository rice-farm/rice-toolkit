import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#83e600",
  primaryBright: "#AEEE5C",
  primaryDark: "#65B300",
  secondary: "#1b95ce",
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
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#08a029",
  textDisabled: "#BDC2C4",
  textSubtle: "#666666",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #DFFEC6 0%, #C4FB97 100%)",
    violet: "linear-gradient(180deg, #EDF9FF 0%, #b8e5fa 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#41d60d",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#00B26F",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#CCCCCC",
  borderColor: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #3D6F68 0%, #295650 100%)",
    cardHeader: "linear-gradient(166.77deg, #4C6B64 0%, #35514B 100%)",
    blue: "linear-gradient(180deg, #339F7E 0%, #17956F 100%)",
    violet: "linear-gradient(180deg, #66AAC1 0%, #408BA4 100%)",
  },
};
