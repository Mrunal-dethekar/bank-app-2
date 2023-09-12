import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 5000,
  statements: [
    {
      time: Date.now(),
      type: "INITIAL",
      amount: 5000,
    },
  ],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addMoney: (state, actions) => {
      const amount = actions.payload;
      state.balance += amount;
      state.statements.push({
        time: Date.now(),
        type: "CREDIT",
        amount,
      });
    },
    withdrawMoney: (state, actions) => {
      const amount = actions.payload;
      state.balance -= amount;
      state.statements.push({
        time: Date.now(),
        type: "DEBIT",
        amount,
      });
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice.reducer;
