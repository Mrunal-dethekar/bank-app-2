import { Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { object, number } from "yup";
import { Formik } from "formik";
import React from "react";

import { accountActions } from "../store/slices/accountingSlice";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import AmountInput from "../components/Inputs/AmountInput";

let depositSchema = object({
  amount: number().required().positive().integer(),
});

const DepositForm = ({ navigation }) => {
  const dispatch = useDispatch();

  const addMoneyHandler = ({ amount }) => {
    dispatch(accountActions.addMoney(Number(amount)));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ amount: "" }}
        onSubmit={addMoneyHandler}
        validationSchema={depositSchema}>
        {({ handleChange, handleSubmit, values: { amount }, errors }) => (
          <>
            <View style={styles.formContainer}>
              <Text style={styles.depositeText}>Deposit Form</Text>
              <AmountInput
                placeholder='Amount to deposit'
                value={amount}
                onChangeText={handleChange("amount")}
              />
            </View>
            {errors.amount ? (
              <Text style={styles.error}>{errors.amount}</Text>
            ) : null}
            <View style={styles.btnContainer}>
              <PrimaryButton
                name='ADD MONEY'
                onPress={handleSubmit}
                disabled={!amount}
              />
            </View>
          </>
        )}
      </Formik>
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
  error: {
    paddingLeft: 12,
    color: "red",
  },
});
