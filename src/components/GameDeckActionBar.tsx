import React, { useState } from 'react';
import { Action, TakeCardAction } from '../game/model/Actions';
import { Card, CardType } from '../game/model/Card';
import { Game } from '../game/model/Game';
import { CardList } from './CardList';
import { DeckCard } from './DeckCard';
import { useKeyDown } from '../common/useKeyDownHook';
import last from 'lodash/last';

export const GameDeckActionBar = ({ game, dispatch, className } : { 
    game: Game,
    dispatch: (action: Action) => void,
    className?: string
}) => {
    const [cardClicked, setCardClicked] = useState<Card|undefined>();
    useKeyDown("Space", () => !game.playerTurn.lastCardIsPirate() && setCardClicked(last(game.deck)));

    const playerTurnIndex = game.players.indexOf(game.playerTurn);
    const position =  playerTurnIndex < game.players.length / 2? { left: "80%" } : { left: "5%" };
    return <div className={`game-deck surface ${className}`} style={position}>
        <div>
            <h4>Deck</h4>
            <div className={`card-list vertical`}>
                {game.deck.map( (card, i) => <DeckCard 
                    key={i}
                    card={card}
                    enabled={ !game.playerTurn.lastCardIsPirate() && i === game.deck.length -1 }
                    onClick={ () => {
                        dispatch(new TakeCardAction());
                        setCardClicked(undefined);
                    }}
                    style={{ position: "absolute", top: `${i}px`, width: 100 }}
                    clicked={cardClicked === card}
                />)}
            </div>
        </div>
        <div>
            <h4>Used Deck</h4>
            <CardList
                cards={game.usedDeck.map( card => new Card(CardType.DECK))}
                selectedCards={[]}
                canSelect={() => false}
                setSelected={ undefined }
                orientation="vertical"
                cardSize="normal"
            />
        </div>
    </div>
}























