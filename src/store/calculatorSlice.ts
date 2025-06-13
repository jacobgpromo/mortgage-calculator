import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  amount: string;
  term: string;
  rate: string;
  mortgageType: "repayment" | "interest-only" | "";
  showResults: boolean;
  monthly: string;
  totalAmount: string;
}

const initialState: CalculatorState = {
  amount: "",
  term: "",
  rate: "",
  mortgageType: "",
  monthly: "",
  totalAmount: "",
  showResults: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    setRate: (state, action: PayloadAction<string>) => {
      state.rate = action.payload;
    },
    setMortgageType: (
      state,
      action: PayloadAction<"repayment" | "interest-only">
    ) => {
      state.mortgageType = action.payload;
    },
    clearAll: (state) => {
      state.amount = "";
      state.term = "";
      state.rate = "";
      state.mortgageType = "";
      state.monthly = "";
      state.totalAmount = "";
    },
    calculateResult: (state) => {
      const principal = parseFloat(state.amount);
      const annualInterestRate = parseFloat(state.rate);
      const years = parseFloat(state.term);

      const monthlyInterestRate = annualInterestRate / 100 / 12;
      const numberOfPayments = years * 12;

      const monthlyPayment =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const totalPayment = monthlyPayment * numberOfPayments;

      if (state.mortgageType === "interest-only") {
        const monthlyInterestOnly = (principal * annualInterestRate) / 100 / 12;
        const totalInterestOnly = monthlyInterestOnly * numberOfPayments;

        state.monthly = monthlyInterestOnly.toFixed(2);
        state.totalAmount = totalInterestOnly.toFixed(2);
        state.showResults = true;
        return;
      } else {
        state.monthly = monthlyPayment.toFixed(2);
        state.totalAmount = totalPayment.toFixed(2);
        state.showResults = true;
      }
    },
  },
});

export const {
  calculateResult,
  clearAll,
  setAmount,
  setTerm,
  setRate,
  setMortgageType,
} = counterSlice.actions;
export default counterSlice.reducer;
