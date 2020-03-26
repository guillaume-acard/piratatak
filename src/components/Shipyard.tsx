import React from 'react'
import { Card, BoatCard, CardType } from '../game/model/Card'
import { CardSprite } from './CardSprite';
import "./Shipyard.css";

export const ShipYard = ({ cards, selectedCards, setSelected, canSelect } : { 
    cards: Array<BoatCard>,
    selectedCards: Array<Card>,
    setSelected: (card: Card) => void,
    canSelect: (card:Card) => boolean
}) => {
    const shipyardCards = [1, 2, 3, 4, 5, 6].map( piece => cards.find(card => card.piece === piece) ?? new Card(CardType.EMPTY));
    return <div className="shipyard">
        <div className="row">
            {shipyardCards.slice(0, 3).map( (card, i) => <CardSprite key={i} 
                card={card}
                isSelected={selectedCards.includes(card)}
                onClick={card.type !== CardType.EMPTY && canSelect(card)? setSelected : undefined}
                size="small"
            />)}
        </div>
        <div className="row">
            {shipyardCards.slice(3, 6).map( (card, i) => <CardSprite key={i} 
                card={card}
                isSelected={selectedCards.includes(card)}
                onClick={ card.type !== CardType.EMPTY && canSelect(card)? setSelected : undefined }
                size="small"
            />)}
        </div>
    </div>
}