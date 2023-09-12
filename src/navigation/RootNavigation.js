import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";

import React from "react";
import Home from "../screens/Home";
import DepositForm from "../screens/DepositForm";
import AccountStatement from "../screens/AccountStatement";
import WithdrawalForm from "../screens/WithdrawalForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#3f51b5",
          },
          headerTitleStyle: {
            color: "#fff",
          },
          headerBackVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name='bank'
              size={24}
              color='#fff'
              style={{ marginRight: 6 }}
            />
          ),
        }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "My Bank",
          }}
        />
        <Stack.Screen
          name='DepositForm'
          component={DepositForm}
          options={{
            title: "My Bank",
          }}
        />
        <Stack.Screen
          name='WithdrawalForm'
          component={WithdrawalForm}
          options={{
            title: "My Bank",
          }}
        />
        <Stack.Screen
          name='AccountStatement'
          component={AccountStatement}
          options={{
            title: "My Bank",
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigation;
