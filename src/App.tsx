import type { RootState } from "./store/store";
import Calculator from "./components/Calculator";
import EmptyResults from "./components/EmptyResults";
import { useSelector } from "react-redux";
import Results from "./components/Results";

const App = () => {
  const showResults = useSelector(
    (state: RootState) => state.calculator.showResults
  );
  return (
    <main className="bg-slate-100 flex justify-center items-center min-h-screen overflow-x-hidden">
      <div className="flex flex-col w-full max-w-6xl mx-auto shadow-lg bg-white lg:flex-row">
        <Calculator />
        {showResults ? <Results /> : <EmptyResults />}
      </div>
    </main>
  );
};

export default App;
