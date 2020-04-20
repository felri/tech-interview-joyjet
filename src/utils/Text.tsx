import React from "react";
import { Text as TextReactNative, TextStyle } from "react-native";

interface Props {
  children: string;
  style?: TextStyle;
  fontWeight?: string;
}

export const Text: React.FC<Props> = ({ children, style, fontWeight }) => (
  <TextReactNative
    style={[
      style,
      {
        fontFamily:
          fontWeight === "thin"
            ? "Montserrat-Light"
            : fontWeight === "bold"
            ? "Montserrat-Bold"
            : "Montserrat-Regular",
      },
    ]}
  >
    {children}
  </TextReactNative>
);
