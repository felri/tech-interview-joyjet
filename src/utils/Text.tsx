import React from "react";
import { Text as TextReactNative, TextStyle } from "react-native";

interface Props {
  children: string;
  style?: TextStyle;
  fontWeigth?: string;
}

export const Text: React.FC<Props> = ({ children, style, fontWeigth }) => (
  <TextReactNative
    style={[
      style,
      {
        fontFamily:
          fontWeigth === "thin"
            ? "Montserrat-Light"
            : fontWeigth === "bold"
            ? "Montserrat-Bold"
            : "Montserrat-Regular",
      },
    ]}
  >
    {children}
  </TextReactNative>
);
