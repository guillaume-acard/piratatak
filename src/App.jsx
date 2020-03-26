import React, { useState } from 'react';
import './App.css';
import { GameEngine } from './game/GameEngine';
import { PiratatakBoard } from './components/PiratatakBoard';
import { CreateGamePanel } from './components/CreateGamePanel';

function App() {
  const [gameEngine, setGameEngine] = useState(null);

  return (
    <div className="app">
      <h1>Piratatak! <button onClick={() => setGameEngine(null)}>New Game</button></h1>
      {!gameEngine && <CreateGamePanel createGame={ playerNames => setGameEngine(new GameEngine(playerNames)) }/>}
      {gameEngine && <PiratatakBoard gameEngine={gameEngine} />}
    </div>
  );
}

export default App;
