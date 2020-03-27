import React from 'react'
import { Card, CardType, BoatCard, PirateCard } from '../game/model/Card'

import "./CardSprite.css"

const getImagePath = (card: Card): string => {
    if(card.type === CardType.CANNON) return `${process.env.PUBLIC_URL}/img/cannon.png`;
    if(card.type === CardType.GOLD_COIN) return `${process.env.PUBLIC_URL}/img/gold_coin.png`;
    if(card.type === CardType.DECK) return `${process.env.PUBLIC_URL}/img/card_back.png`;
    if(card.type === CardType.EMPTY) return `${process.env.PUBLIC_URL}/img/card_empty.jpg`;
    if(card.type === CardType.PIRATE){
        const pirateCard = card as PirateCard;
        return `${process.env.PUBLIC_URL}/img/pirate_${pirateCard.id}.png`;
    }
    if(card.type === CardType.BOAT){
        const boatCard = card as BoatCard;
        return `${process.env.PUBLIC_URL}/img/boat_${boatCard.color}_${boatCard.piece}.jpg`;
    } 
    return `${process.env.PUBLIC_URL}/img/card_back.png`;
}

export const CardSprite = ({ card, 
    isSelected = false, 
    onClick,
    size = "small",
    orientation = "vertical",
    style,
    className
} : { 
    card?: Card, 
    isSelected?: boolean,
    onClick?: (card: Card) => void,
    size?: "small" | "normal"| "large",
    orientation?: "vertical" | "horizontal",
    style?: any,
    className?: string
}) => {
    if(!card) return null;
    return <div 
        className={`card ${isSelected && "selected"} ${onClick? "selectable": ""} ${size} ${orientation} ${className}`} 
        onClick={e => {
            e.preventDefault();
            onClick && onClick(card);
        }}
        style={{ backgroundImage: `url(${getImagePath(card)})`, opacity: card.type === CardType.EMPTY? 0.5 : 1, ...style }}
    />
}