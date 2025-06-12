import Calculator from "./components/Calculator";
import Results from "./components/Results";

const App = () => {
  return (
    <main className="bg-slate-100 flex justify-center items-center h-screen">
      <Calculator />
      <Results />
    </main>
  );
};

export default App;
