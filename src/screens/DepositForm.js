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

  const addMoneyHandler = async (value) => {
    const amount = Number(value.amount);
    const parsedDeposit = await depositSchema.validate(
      {
        amount,
      },
      { strict: true }
    );
    dispatch(accountActions.addMoney(amount));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.main}>
      <Formik initialValues={{ amount: "" }} onSubmit={addMoneyHandler}>
        {({ handleChange, handleSubmit, values: { amount } }) => (
          <>
            <View style={styles.formContainer}>
              <Text style={styles.depositeText}>Deposit Form</Text>
              <AmountInput
                placeholder='Amount to deposit'
                value={amount}
                onChangeText={handleChange("amount")}
              />
            </View>
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
});
