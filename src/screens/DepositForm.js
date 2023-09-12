import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { accountActions } from "../store/slices/accountingSlice";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import AmountInput from "../components/Inputs/AmountInput";

const DepositForm = ({ navigation }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");

  const addMoneyHandler = () => {
    dispatch(accountActions.addMoney(Number(amount)));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.main}>
      <View style={styles.formContainer}>
        <Text style={styles.depositeText}>Deposit Form</Text>
        <AmountInput
          placeholder='Amount to deposit'
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          name='ADD MONEY'
          onPress={addMoneyHandler}
          disabled={!amount}
        />
      </View>
    </View>
  );
};

export default DepositForm;

const styles = StyleSheet.create({
  main: {
    padding: 12,
    backgroundColor: "#fff",
  },
  formContainer: {
    padding: 12,
  },
  depositeText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 24,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});
