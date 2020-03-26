import React, { useState, useEffect } from 'react'
import { CardSprite } from './CardSprite'
import { CardType, Card } from '../game/model/Card';
import ReactCardFlip from 'react-card-flip';

const deckCard = new Card(CardType.DECK);

export const DeckCard = ({ 
    card, 
    enabled, 
    style, 
    onClick,
    clicked
} : { 
    card: Card,
    enabled: boolean,
    style: any;
    onClick?: () => void,
    clicked?: boolean
}) => {
    const [showCard, setShowCard] = useState(0);

    useEffect(() => {
        if(enabled && clicked){
            setShowCard(1);
        }
        if(showCard === 1){
            setTimeout(() => {
                setShowCard(2);
                if(onClick) onClick();
            }, 600);
        }
    }, [showCard, onClick, clicked, enabled])

    if(showCard === 2) return null;
    return <ReactCardFlip isFlipped={showCard > 0} containerStyle={style}>
        <CardSprite 
            card={deckCard} 
            onClick={enabled? () => setShowCard(1) : undefined} 
            size="normal"
        />
        <CardSprite 
            card={card} 
            size="normal"
        />
    </ReactCardFlip>;
}