import { Dimensions } from "react-native";

export const itemsPerRow = 7;
export const screenWidth = Dimensions.get("screen").width;
export const screenHorizontalPadding = 32 * 2;
export const itemMargin = 8;
export const itemSizeWithMargin = (screenWidth - screenHorizontalPadding) / itemsPerRow;
export const itemSize = itemSizeWithMargin - itemMargin;