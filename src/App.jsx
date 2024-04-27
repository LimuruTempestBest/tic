import React, { useState } from 'react';

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newBoard));
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <button className="bg-slate-100 w-24 h-24 mr-2 mb-2" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (squares.every(square => square !== null)) {
      return 'Draw';
    }

    return null;
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className='flex justify-center items-center bg-stone-900 h-screen w-full'>
      <div className="p-4 rounded text-xl">
        <div className="flex justify-center font-bold text-3xl text-slate-100 mb-2">{status}</div>
        <div className="flex mt-10">
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(0)}
          </div>
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(1)}
          </div>
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(2)}
          </div>
        </div>
        <div className="flex">
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(3)}
          </div>
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(4)}
          </div>
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(5)}
          </div>
        </div>
        <div className="flex">
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(6)}
          </div>
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(7)}
          </div>
          <div className="w-16 h-16 mr-10 mb-10">
            {renderSquare(8)}
          </div>
        </div>
        {winner && (
          <div className='flex justify-center'>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded" onClick={handleReset}>
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
