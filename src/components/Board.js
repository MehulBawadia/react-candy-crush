import { useEffect, useState } from "react";

const width = 8;
const candyColors = ["blue", "yellow", "green", "purple", "red", "orange"];

const Board = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((color, index) => {
          return (
            <img key={index} style={{ backgroundColor: color }} alt={color} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
