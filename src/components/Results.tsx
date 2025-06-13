import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Results = () => {
  const monthly = useSelector((state: RootState) => state.calculator.monthly);
  const totalAmount = useSelector(
    (state: RootState) => state.calculator.totalAmount
  );
  return (
    <div className="bg-slate-900 p-10 rounded-r-xl  w-full max-w-full flex flex-col items-start justify-start lg:rounded-bl-[100px]">
      <h4 className="text-white text-2xl mb-4">Your results </h4>
      <p className="text-slate-300 mb-8">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="w-full border-4 border-t-primary-lime bg-[#00000040] p-8 rounded-2xl">
        <p className="text-slate-300 mb-6">Your monthly repayments</p>
        <p className="text-primary-lime text-4xl font-bold lg:text-6xl">
          ${monthly}
        </p>
        <div className="h-0.25 bg-[#9ABED540] w-full my-12 block"></div>
        <p className="text-slate-300 mb-4">Total you'll repay over the term</p>
        <p className="text-white text-2xl font-bold">${totalAmount}</p>
      </div>
    </div>
  );
};

export default Results;
