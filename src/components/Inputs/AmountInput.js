import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const AmountInput = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name='rupee' size={20} color='black' />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          keyboardType='number-pad'
          autoFocus={true}
        />
      </View>
    </View>
  );
};

export default AmountInput;

const styles = StyleSheet.create({
  main: {
    paddingBottom: 12,
    borderBottomColor: "#3f51b5",
    borderBottomWidth: 2,
  },
  placeholder: {
    color: "#3f51b5",
    fontWeight: "400",
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 6,
    fontSize: 16,
    width: "100%",
  },
});
