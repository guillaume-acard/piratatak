import React, { useEffect, useState } from 'react'
import { GameEngine } from '../game/GameEngine';
import { Game } from '../game/model/Game';
import "./Piratatak.css";
import { GameDeckActionBar } from './GameDeckActionBar';
import { Card, PirateCard, GoldCoinCard } from '../game/model/Card';
import { CardSprite } from './CardSprite';
import last from 'lodash/last';
import { playPirate, playGold } from '../game/Sounds';
import { PlayerList } from './PlayerList';

export const PiratatakBoard = ({ gameEngine }: { gameEngine: GameEngine }) => {
    const [game, setGame]: [Game, any] = useState(gameEngine.game);
    const [selectedCards, setSelectedCards]: [Array<Card>, any] = useState([]);

    useEffect(() => {
        setGame(gameEngine.game);
        gameEngine.subscribe(game => setGame(game));
    }, [gameEngine]);

    useEffect(() => {
        const lastCard = game.playerTurn.lastCard();
        if (lastCard instanceof PirateCard) {
            const pirateCard = game.playerTurn.lastCard() as PirateCard;
            playPirate(pirateCard.id);
        } else if (lastCard instanceof GoldCoinCard) {
            playGold();
        }
    }, [game])

    return <div className="game-board">
        {game.winningPlayer && <div className="winning-player surface">
            <img src={`${process.env.PUBLIC_URL}/img/win-captain.png`} alt="You win" />{game.winningPlayer.name} WIN!!!
        </div>}
        <PlayerList
            game={game}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            dispatch={action => gameEngine.dispatch(action)}
        />
        {game.playerTurn.lastCardIsPirate() && <div className={`surface event-card`}>
            <h2>PIRATE!</h2>
            <CardSprite
                className="shake"
                card={last(game.playerTurn.cards)}
                size="large"
            />
        </div>}
        {!game.winningPlayer && <GameDeckActionBar
            game={game}
            dispatch={action => gameEngine.dispatch(action)}
        />}
    </div>
}