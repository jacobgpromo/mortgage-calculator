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
    <main className="bg-slate-100 flex justify-center items-center h-screen ">
      <div className="h-xl flex shadow-lg bg-white">
        <Calculator />
        {showResults ? <Results /> : <EmptyResults />}
      </div>
    </main>
  );
};

export default App;
