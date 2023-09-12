import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const AccountStatement = ({ navigation }) => {
  const statements = useSelector((state) => state.accounting.statements);

  const depositHandler = () => {
    navigation.navigate("DepositForm");
  };

  const withdrawHandler = () => {
    navigation.navigate("WithdrawalForm");
  };

  const getDateString = (timestamp) => {
    const date = new Date(timestamp);
    const dateString =
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      ("00" + date.getDate()).slice(-2) +
      "/" +
      date.getFullYear() +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2) +
      ":" +
      ("00" + date.getSeconds()).slice(-2);
    return dateString;
  };

  return (
    <View style={styles.main}>
      <View style={styles.statementContainer}>
        <Text style={styles.statementText}>Account Statement</Text>
        <View style={styles.statementRow}>
          <Text style={styles.when}>When</Text>
          <Text style={styles.type}>Type</Text>
          <Text style={styles.amount}>Amount (₹)</Text>
        </View>
        {statements.map((statement) => (
          <View style={styles.statementRow} key={statement.time}>
            <Text style={styles.when}>{getDateString(statement.time)}</Text>
            <Text style={styles.type}>{statement.type}</Text>
            <Text style={styles.amount}>{statement.amount}</Text>
          </View>
        ))}
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          name='DEPOSIT'
          transparent
          onPress={depositHandler}
          style={{ marginRight: 4 }}
        />
        <PrimaryButton name='WITHDRAW' transparent onPress={withdrawHandler} />
      </View>
    </View>
  );
};

export default AccountStatement;

const styles = StyleSheet.create({
  main: {
    padding: 12,
    backgroundColor: "#fff",
  },
  statementContainer: {
    padding: 12,
  },
  statementText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 24,
  },
  statementRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  when: {
    flex: 3,
  },
  type: {
    flex: 1,
    textAlign: "right",
  },
  amount: {
    flex: 2,
    textAlign: "right",
  },
  btnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
