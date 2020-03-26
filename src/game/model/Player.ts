import { Card, BoatColor, CardType, BoatCard, PirateCard } from "./Card";
import last from "lodash/last";

export class Player{
    name: string;
    cards: Array<Card> = [];
    boatColor?: BoatColor;
    selectedCards: Array<Card> = [];

    constructor(name: string){
        this.name = name;
    }

    getBoatCards = () => {
        if(this.boatColor){
            return this.cards
                .filter( card => card.type === CardType.BOAT )
                .map( card => card as BoatCard )
                .filter( card => card.color === this.boatColor);
        }
        return [];
    }

    hasWon(){
        return this.getBoatCards().length === 6;
    }

    lastCard(){
        return last(this.cards)
    }
    
    lastCardIsPirate(){
        return last(this.cards) instanceof PirateCard;
    }
}