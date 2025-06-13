import NoResults from "../assets/images/illustration-empty.svg";

const EmptyResults = () => {
  return (
    <div className="bg-slate-900 p-10 rounded-r-xl rounded-bl-[100px] w-xl flex flex-col items-center justify-center">
      <img className="h-[192px]" src={NoResults} alt="" />
      <h4 className="text-white text-2xl text-center mb-4">
        Results shown here
      </h4>
      <p className="text-slate-300 text-center">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default EmptyResults;
