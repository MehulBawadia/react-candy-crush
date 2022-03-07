import Board from "./components/Board";

const App = () => {
  return (
    <>
      <h1 className="text-center">Candy Crush in ReactJs</h1>
      <Board />

      <div className="links">
        <a href="https://github.com/MehulBawadia/react-candy-crush">
          Check the source code
        </a>
      </div>
    </>
  );
};

export default App;
