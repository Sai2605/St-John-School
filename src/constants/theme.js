import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#B80900",     // Red
    yellow: "#ffeb3c",
    white: "#fff",
    success: "#138000",
    error: "#D0421B",
    black: "#000000",
    blue: "#4096FE",
    gray: "#a6a6a6",
    gray1: "#363636",
    lightGray: "#dedede",
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    title: 20,
    normal: 26,
    subtitle: 18,
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTWEIGHTS = {
    regular: "300",
    medium: "500",
    bold: "600",
};
export const FONTS = {
    ExtraBold: "Inter-ExtraBold",
    Bold: "Inter-Bold",
    SemiBold: "Inter-SemiBold",
    Regular: "Inter-Regular",
    Medium: "Inter-Medium",
    Thin: "Inter-Thin",
    Light: "Inter-Light",
    ExtraLight: "Inter_ExtraLight", fontSize: SIZES.body3,
    Black: "Inter-Black", fontSize: SIZES.body4,
    body5: "Inter-Black", fontSize: SIZES.body5,
};

const appTheme = { COLORS, SIZES, FONTS, FONTWEIGHTS };

export default appTheme;
