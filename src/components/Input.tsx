import { FaDollarSign } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from "react";

interface Props {
  title: string;
  className: string;
  inputClass?: string;
  value: string;
  icon: "money" | "years" | "percentage";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const Input = ({
  title,
  className,
  inputClass,
  value,
  onChange,
  icon,
  error,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative group">
      <div className="mb-4">
        <label className={`text-slate-500 `} htmlFor="amount">
          {title}
        </label>
      </div>
      <div
        className={`absolute p-[16px] pb-[14.5px] top-10.5 ${
          error ? "bg-red-500" : isFocused ? "bg-primary-lime" : "bg-slate-100"
        } ${className}`}
      >
        {icon == "money" && (
          <FaDollarSign className={` ${error && "text-white"}`} />
        )}
        {icon == "years" && (
          <FaCalendarDays className={` ${error && "text-white"}`} />
        )}
        {icon == "percentage" && (
          <FaPercentage className={` ${error && "text-white"}`} />
        )}
      </div>
      <input
        className={`border ${
          error ? "border-red-500" : "border-slate-500"
        }   text-slate-900 rounded-lg 
            focus:outline-none focus:ring-primary-lime focus:border-primary-lime block w-full ${inputClass} p-3
            group-hover:border-slate-900 `}
        type="number"
        id="amount"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">This field is required</p>
      )}
    </div>
  );
};

export default Input;
