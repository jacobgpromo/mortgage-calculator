import { FaDollarSign } from "react-icons/fa";

const Calculator = () => {
  return (
    <div className="bg-white p-6 rounded-xl w-xl">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
        <p>Clear All</p>
      </div>
      <div className="relative">
        <label htmlFor="amount">Mortgage Amout</label>
        <div className="absolute p-4.5 bg-slate-100">
          <FaDollarSign />
        </div>
        <input
          className="border border-gray-300 text-slate-900 rounded-lg focus:outline-none focus:ring-primary-lime focus:border-primary-lime block w-full ps-14 p-3"
          placeholder="amount"
          type="number"
          id="amount"
        />
      </div>
    </div>
  );
};

export default Calculator;
