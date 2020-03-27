import React from 'react'
import { Game } from '../game/model/Game'
import { Card } from '../game/model/Card'
import { PlayerBoard } from './PlayerBoard'
import { Action } from '../game/model/Actions'
import { Player } from '../game/model/Player'

const indexAfterPlayerTurn = (game: Game, player: Player) => {
    const playerTurnIndex = game.players.indexOf(game.playerTurn);
    const playerIndex = game.players.indexOf(player);
    let positionIndex = playerIndex - playerTurnIndex;
    if(positionIndex < 0){
        positionIndex = game.players.length + positionIndex;
    } 
    return positionIndex-1;
    ///// Cases for 4 players
    // [0] -  1  -  2  -  3  => 0 - 1 - 2 - 3
    //  0  - [1] -  2  -  3  => 3 - 0 - 1 - 2
    //  0  -  1  - [2] -  3  => 2 - 3 - 0 - 1
    //  0  -  1  -  2  - [3] => 1 - 2 - 3 - 0
}

export const PlayerList = ({ game, selectedCards, setSelectedCards, dispatch } : {
    game: Game,
    selectedCards: Array<Card>,
    setSelectedCards: (cards: Array<Card>) => void
    dispatch: (action: Action) => void
}) => {
    return <div className="players">
        {game.players.map( (player, i) => <PlayerBoard 
            key={i} 
            player={player} 
            playerTurn={game.playerTurn} 
            selectedCards={selectedCards} 
            setSelectedCards={setSelectedCards}
            dispatch={dispatch}
            style={{ 
                left: game.playerTurn === player? "20px": `calc(var(--player-width) + ${indexAfterPlayerTurn(game, player)} * var(--player-shift))`,
                marginTop: game.playerTurn === player? 0 : -55 + indexAfterPlayerTurn(game, player)*40,
                zIndex: game.playerTurn === player? 0 : 1000 - indexAfterPlayerTurn(game, player) * 100
            }}
        />)}
    </div>
}