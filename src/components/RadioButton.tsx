interface Props {
  title: string;
  selectedType: "repayment" | "interest-only" | "";
  onChange: (type: "repayment" | "interest-only") => void;
}

const RadioButton = ({ title, selectedType, onChange }: Props) => {
  const value = title.toLowerCase().replace(" ", "-") as
    | "repayment"
    | "interest-only";
  return (
    <li className="w-full mb-4 relative">
      <input
        type="radio"
        name="list-radio"
        id={title}
        className="peer hidden"
        value={value}
        checked={selectedType === value}
        onChange={() => onChange(value)}
      />

      <label
        htmlFor={title}
        className="flex items-center w-full p-3 pl-8 border border-slate-500 rounded-lg cursor-pointer
                 hover:border-primary-lime peer-checked:border-primary-lime peer-checked:bg-lime-faded"
      >
        <span className="text-sm font-bold text-slate-900">{title}</span>
      </label>
      <div className="w-5 h-5 absolute top-3.5 left-2 rounded-full border-2 border-slate-500 peer-checked:border-primary-lime"></div>
      <div className="w-3 h-3 absolute top-4.5 left-3 transition rounded-full bg-primary-lime opacity-0 peer-checked:opacity-100" />
    </li>
  );
};

export default RadioButton;
