import React, { KeyboardEvent } from 'react'
import { Card } from '../game/model/Card'
import { CardSprite } from './CardSprite';

import "./CardList.css";

export const CardList = ({ 
    cards, 
    selectedCards, 
    setSelected, 
    canSelect, 
    orientation = "horizontal",
    cardOrientation = "vertical",
    cardSize = "small",
    onKeyPress
} : { 
    cards: Array<Card>, 
    selectedCards: Array<Card>,
    setSelected?: (card: Card) => void,
    canSelect?: (card:Card) => boolean,
    orientation?: "vertical"|"horizontal"
    cardOrientation?: "vertical" | "horizontal",
    cardSize?: "small" | "normal" | "large",
    onKeyPress?: (e: KeyboardEvent) => void
}) => {
    return <div className={`card-list ${orientation}`} onKeyPress={onKeyPress}>
        {cards.map( (card, i) => <CardSprite 
            key={i} 
            className="fade-in"
            card={card} 
            isSelected={selectedCards.includes(card)} 
            onClick={canSelect && canSelect(card)? setSelected : undefined }
            orientation={cardOrientation}
            size={cardSize}
            style={orientation === "vertical"? { top: `${i}px` } : null}
        />)}
    </div>
}