import { Card } from "./Card";

export class Action{
}

export class TakeCardAction extends Action{

}

export class EndTurnAction extends Action{

}

export class BuyBoatAction extends Action{
    targetCard: Card;

    constructor(targetCard: Card){
        super();
        this.targetCard = targetCard;
    }
}

export class GiveCardsAction extends Action{
    cards: Array<Card>;

    constructor(cards: Array<Card>){
        super();
        this.cards = cards;
    }
}