import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { object, number } from "yup";
import { Formik } from "formik";
import React from "react";

import { accountActions } from "../store/slices/accountingSlice";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import AmountInput from "../components/Inputs/AmountInput";

let withdrawalSchema = object({
  amount: number().required().positive().integer(),
});

const WithdrawalForm = ({ navigation }) => {
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.accounting.balance);

  const withdrawMoneyHandler = ({ amount }) => {
    dispatch(accountActions.withdrawMoney(Number(amount)));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ amount: "" }}
        onSubmit={withdrawMoneyHandler}
        validationSchema={withdrawalSchema}>
        {({ handleChange, handleSubmit, values: { amount }, errors }) => (
          <>
            <View style={styles.formContainer}>
              <Text style={styles.withdrawText}>withdrawal Form</Text>
              <AmountInput
                placeholder='Amount to withdraw'
                value={amount}
                onChangeText={handleChange("amount")}
              />
            </View>
            {errors.amount ? (
              <Text style={styles.error}>{errors.amount}</Text>
            ) : null}
            {balance < amount ? (
              <Text style={styles.error}>
                Your Balance is less than withdrawal amount
              </Text>
            ) : null}
            <View style={styles.btnContainer}>
              <PrimaryButton
                name='WITHDRAW MONEY'
                onPress={handleSubmit}
                disabled={!amount || balance < amount}
              />
            </View>
          </>
        )}
      </Formik>
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
  error: {
    paddingLeft: 12,
    color: "red",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});
