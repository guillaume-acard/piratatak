import { Player } from "./Player";
import { Card } from "./Card";

export class Game{
    players: Array<Player>;
    playerTurn: Player;
    turnCount: number = 0;
    winningPlayer: Player | undefined;
    
    deck: Array<Card>;
    usedDeck: Array<Card> = [];
    lastCard?: Card ;

    constructor(playerNames: Array<string>, deck: Array<Card>){
        this.players = playerNames.map( name => new Player(name));
        this.playerTurn = this.players[0];

        this.deck = deck;
    }
}