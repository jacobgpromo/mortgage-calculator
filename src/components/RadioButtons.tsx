import RadioButton from "./RadioButton";

interface Props {
  selectedType: "repayment" | "interest-only" | "";
  onChange: (type: "repayment" | "interest-only") => void;
  error: boolean;
}

const RadioButtons = ({ selectedType, onChange, error }: Props) => {
  return (
    <div>
      <h3 className="mb-4 text-slate-500 ">Mortgage Type</h3>
      <ul className="w-full text-sm font-medium text-slate-500 bg-white rounded-lg">
        <RadioButton
          title="Repayment"
          selectedType={selectedType}
          onChange={onChange}
        />
        <RadioButton
          title="Interest Only"
          selectedType={selectedType}
          onChange={onChange}
        />
      </ul>
      {error && (
        <p className="text-red-500 text-xs mt-2">This field is required</p>
      )}
    </div>
  );
};

export default RadioButtons;
