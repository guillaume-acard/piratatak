export enum CardType {
    PIRATE = "pirate",
    CANNON = "cannon",
    GOLD_COIN = "gold coin",
    BOAT = "boat",
    EMPTY = "empty",
    DECK = "deck"
}

export class Card{
    type: CardType;

    constructor(type: CardType){
        this.type = type;
    }
}

export enum BoatColor{
    RED = "red",
    BLUE = "blue",
    YELLOW = "yellow",
    GREEN = "green"
}

export class BoatCard extends Card{
    color: BoatColor;
    piece: 1|2|3|4|5|6;

    constructor(color: BoatColor, piece: any){
        super(CardType.BOAT);
        this.color = color;
        this.piece = piece;
    }
}

export class CannonCard extends Card{
    constructor(){
        super(CardType.CANNON)
    }
}

export class GoldCoinCard extends Card{
    constructor(){
        super(CardType.GOLD_COIN);
    }
}

export class PirateCard extends Card{
    id: number;

    constructor(id: number){
        super(CardType.PIRATE);
        this.id = id;
    }
}