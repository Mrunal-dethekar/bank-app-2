import { View, Text, StyleSheet } from "react-native";

import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const balance = useSelector((state) => state.accounting.balance);

  const accStatementHandler = () => {
    navigation.navigate("AccountStatement");
  };

  const depositHandler = () => {
    navigation.navigate("DepositForm");
  };

  const withdrawHandler = () => {
    navigation.navigate("WithdrawalForm");
  };

  return (
    <View style={styles.main}>
      <View style={styles.textContainer}>
        <Text style={styles.helloText}>Hello User</Text>
        <Text style={styles.balanceText}>Your balance is ₹{balance}</Text>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          name='STATEMENT'
          transparent
          onPress={accStatementHandler}
          textStyle={styles.btnText}
        />
        <PrimaryButton
          name='DEPOSIT'
          transparent
          onPress={depositHandler}
          style={{ marginHorizontal: 4 }}
          textStyle={styles.btnText}
        />
        <PrimaryButton
          name='WITHDRAW'
          transparent
          onPress={withdrawHandler}
          textStyle={styles.btnText}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    padding: 12,
    backgroundColor: "#fff",
  },
  helloText: {
    fontSize: 16,
    color: "#969696",
  },
  balanceText: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 4,
  },
  textContainer: {
    padding: 12,
  },
  btnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btnText: {
    color: "#ff3176",
  },
});
