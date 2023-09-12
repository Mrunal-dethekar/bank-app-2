import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React, { useState } from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import AmountInput from "../components/Inputs/AmountInput";
import { accountActions } from "../store/slices/accountingSlice";

const WithdrawalForm = ({ navigation }) => {
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.accounting.balance);
  const [amount, setAmount] = useState("");

  const withdrawMoneyHandler = () => {
    dispatch(accountActions.withdrawMoney(Number(amount)));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.main}>
      <View style={styles.formContainer}>
        <Text style={styles.withdrawText}>withdrawal Form</Text>
        <AmountInput
          placeholder='Amount to withdraw'
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
      </View>
      {balance < amount ? (
        <Text style={styles.lowBalanceText}>
          Your Balance is less than withdrawal amount
        </Text>
      ) : null}
      <View style={styles.btnContainer}>
        <PrimaryButton
          name='WITHDRAW MONEY'
          onPress={withdrawMoneyHandler}
          disabled={!amount || balance < amount}
        />
      </View>
    </View>
  );
};

export default WithdrawalForm;

const styles = StyleSheet.create({
  main: {
    padding: 12,
    backgroundColor: "#fff",
  },
  formContainer: {
    padding: 12,
  },
  withdrawText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 24,
  },
  lowBalanceText: {
    paddingLeft: 12,
    color: "red",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});
