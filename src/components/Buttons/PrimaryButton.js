import { StyleSheet, Text, TouchableOpacity } from "react-native";

import React from "react";

const PrimaryButton = ({
  name,
  onPress,
  style,
  transparent,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        transparent ? styles.lightBackground : styles.darkBackground,
        { opacity: disabled ? 0.7 : 1 },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.name,
          transparent ? styles.darkText : styles.lightText,
          textStyle,
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  darkBackground: {
    backgroundColor: "#3f51b5",
  },
  lightBackground: {
    backgroundColor: "transparent",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  darkText: {
    color: "#3f51b5",
  },
  lightText: {
    color: "#fff",
  },
});
