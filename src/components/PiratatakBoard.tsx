import React, { useEffect, useState } from 'react'
import { GameEngine } from '../game/GameEngine';
import { Game } from '../game/model/Game';
import "./Piratatak.css";
import { GameDeckActionBar } from './GameDeckActionBar';
import { PlayerBoard } from './PlayerBoard';
import { Card, PirateCard, GoldCoinCard } from '../game/model/Card';
import { CardSprite } from './CardSprite';
import last from 'lodash/last';
import { playPirate, playGold } from '../game/Sounds';

export const PiratatakBoard = ({ gameEngine } : { gameEngine: GameEngine }) => {
    const [game, setGame] : [Game, any] = useState(gameEngine.game);
    const [selectedCards, setSelectedCards]: [Array<Card>, any] = useState([]);

    useEffect(() => {
        setGame(gameEngine.game);
        gameEngine.subscribe( game => setGame(game));
    }, [gameEngine]);

    useEffect(() => {
        const lastCard = game.playerTurn.lastCard();
        if(lastCard instanceof PirateCard){
            const pirateCard = game.playerTurn.lastCard() as PirateCard;
            playPirate(pirateCard.id);
        }else if(lastCard instanceof GoldCoinCard){
            playGold();
        }
    }, [game])

    const playerTurnIndex = game.players.indexOf(game.playerTurn);
    const dock =  playerTurnIndex < game.players.length / 2? "dock-right" : "dock-left";

    return <div className="game-board">
        {game.winningPlayer && <div className="winning-player surface">{game.winningPlayer.name} WIN!!!</div>}
        <div className="players">
            {game.players.map( (player, i) => <PlayerBoard 
                key={i} 
                player={player} 
                playerTurn={game.playerTurn} 
                selectedCards={selectedCards} 
                setSelectedCards={setSelectedCards}
                dispatch={action => gameEngine.dispatch(action)}
            />)}
        </div>
        {game.playerTurn.lastCardIsPirate() && <div className={`surface event-card ${dock}`}>
            <h2>PIRATE!</h2>
            <CardSprite 
                className="shake"
                card={last(game.playerTurn.cards)}
                size="large"
            />
        </div>}
        <GameDeckActionBar 
            game={game}
            dispatch={action => gameEngine.dispatch(action)}
            className={dock} 
        />
    </div>
}