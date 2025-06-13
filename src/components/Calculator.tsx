import { FaCalculator } from "react-icons/fa";
import Input from "../components/Input";
import RadioButtons from "./RadioButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAll,
  setAmount,
  setRate,
  setTerm,
  setMortgageType,
  calculateResult,
} from "../store/calculatorSlice";
import type { RootState } from "../store/store";
import { useState } from "react";

const Calculator = () => {
  const [amountError, setAmountError] = useState(false);
  const [termError, setTermError] = useState(false);
  const [rateError, setRateError] = useState(false);
  const [mortgageTypeError, setMortgageTypeError] = useState(false);
  const amount = useSelector((state: RootState) => state.calculator.amount);
  const term = useSelector((state: RootState) => state.calculator.term);
  const rate = useSelector((state: RootState) => state.calculator.rate);
  const mortgageType = useSelector(
    (state: RootState) => state.calculator.mortgageType
  );
  const dispatch = useDispatch();

  const handleCalculate = () => {
    const isAmountMissing = amount.trim() === "";
    const isTermMissing = term.trim() === "";
    const isRateMissing = rate.trim() === "";
    const isMortgageTypeMissing = mortgageType === "";

    setAmountError(isAmountMissing);
    setTermError(isTermMissing);
    setRateError(isRateMissing);
    setMortgageTypeError(isMortgageTypeMissing);

    if (
      isAmountMissing ||
      isTermMissing ||
      isRateMissing ||
      isMortgageTypeMissing
    )
      return;
    dispatch(calculateResult());
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl w-full max-w-full">
      <div className="flex flex-col justify-between mb-6 lg:flex-row">
        <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
        <p
          className="underline cursor-pointer"
          onClick={() => {
            dispatch(clearAll());
            setAmountError(false);
            setTermError(false);
            setRateError(false);
            setMortgageTypeError(false);
          }}
        >
          Clear All
        </p>
      </div>
      <div className="mb-6">
        <Input
          title="Mortage Amount"
          className="rounded-l-lg left-0.5 "
          inputClass="ps-13"
          value={amount}
          onChange={(e) => dispatch(setAmount(e.target.value))}
          icon="money"
          error={amountError}
        />
      </div>
      <div className="grid grid-cols-1 mb-6 gap-4 lg:grid-cols-2">
        <Input
          title="Mortgage Term Years"
          className="ml-4 right-0.5 rounded-r-lg "
          value={term}
          onChange={(e) => dispatch(setTerm(e.target.value))}
          icon="years"
          error={termError}
        />
        <Input
          title="Interest Rate"
          className="ml-4 right-0.5 rounded-r-lg "
          value={rate}
          onChange={(e) => dispatch(setRate(e.target.value))}
          icon="percentage"
          error={rateError}
        />
      </div>
      <div className="mb-6">
        <RadioButtons
          selectedType={mortgageType}
          onChange={(type) => dispatch(setMortgageType(type))}
          error={mortgageTypeError}
        />
      </div>
      <div className="mb-6">
        <button
          className="bg-primary-lime font-bold flex items-center justify-center transition py-3 cursor-pointer px-6 rounded-4xl hover:bg-lime-hover"
          onClick={handleCalculate}
        >
          <FaCalculator className="mr-4" /> Calculate Repayments
        </button>
      </div>
    </div>
  );
};

export default Calculator;
