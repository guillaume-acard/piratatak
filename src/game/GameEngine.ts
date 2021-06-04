import range from "lodash/range";
import { Game } from "./model/Game"
import { CardType, BoatCard, PirateCard, GoldCoinCard, CannonCard, BoatColor, Card } from "./model/Card";
import { Player } from "./model/Player";
import { Action, TakeCardAction, EndTurnAction, BuyBoatAction, GiveCardsAction } from "./model/Actions";
import { shuffle } from "../common/ArrayTools";
import { playGold, playPirate } from "./Sounds";

type GameListener = (game: Game) => void;

const isPlayerBoatColorCard = (player: Player) => (card: Card) => {
    if (player.boatColor && card.type === CardType.BOAT) {
        const boatCard = card as BoatCard;
        return boatCard.color === player.boatColor;
    }
    return false;
}

const playCardSound = (card?: Card) => {
    if (card instanceof PirateCard) {
        const pirateCard = card;
        playPirate(pirateCard.id);
    } else if (card instanceof GoldCoinCard) {
        playGold();
    }
}

export class GameEngine {
    game: Game;
    private listeners: GameListener[] = [];

    constructor(playerNames: string[]) {
        const deck = [
            ...range(1, 21).map(i => new GoldCoinCard()),
            ...range(1, 4).map(i => new CannonCard()),
            ...range(1, 9).map(i => new PirateCard(i)),
            ...range(1, 7).map(i => new BoatCard(BoatColor.BLUE, i)),
            ...range(1, 7).map(i => new BoatCard(BoatColor.GREEN, i)),
            ...range(1, 7).map(i => new BoatCard(BoatColor.RED, i)),
            ...range(1, 7).map(i => new BoatCard(BoatColor.YELLOW, i)),
        ];
        shuffle(deck);
        this.game = new Game(playerNames, deck);
    }

    subscribe(callback: GameListener) {
        this.listeners.push(callback);
    }

    dispatch(action: Action) {
        if (action instanceof TakeCardAction) {
            const card = this.game.deck.pop();
            playCardSound(card);
            this.game.lastCard = card;
            if (card) {
                this.game.playerTurn.cards.push(card);
                if (!this.game.playerTurn.boatColor && card.type === CardType.BOAT) {
                    const boatCard = card as BoatCard;
                    if (!this.game.players.some(player => player.boatColor === boatCard.color)) {
                        this.game.playerTurn.boatColor = boatCard.color;
                    }
                }
            }
            if (this.game.deck.length === 0) {
                shuffle(this.game.usedDeck);
                this.game.deck = this.game.usedDeck;
                this.game.usedDeck = [];
            }
        }
        if (action instanceof BuyBoatAction) {
            const buyBoatAction = action as BuyBoatAction;
            const targetPlayer = this.game.players.find(player => player.cards.includes(buyBoatAction.targetCard));
            const givenCoins: Array<Card> = [];
            this.game.playerTurn.cards = [...this.game.playerTurn.cards
                .filter(card => {
                    if (card.type === CardType.GOLD_COIN && givenCoins.length < 3) {
                        givenCoins.push(card);
                        return false;
                    }
                    return true;
                }), buyBoatAction.targetCard];
            if (targetPlayer) {
                targetPlayer.cards = [
                    ...targetPlayer.cards.filter(card => card !== buyBoatAction.targetCard),
                    ...givenCoins
                ];
            }
        }
        if (action instanceof GiveCardsAction) {
            const giveCardsAction = action as GiveCardsAction;
            const pirateCards = this.game.playerTurn.cards.filter(card => card.type === CardType.PIRATE);
            this.game.playerTurn.cards = this.game.playerTurn.cards.filter(card => !giveCardsAction.cards.includes(card) && card.type !== CardType.PIRATE);
            this.game.usedDeck = [...this.game.usedDeck, ...pirateCards, ...giveCardsAction.cards];
            // Check if player still has boat color
            if (!this.game.playerTurn.cards.some(isPlayerBoatColorCard(this.game.playerTurn))) {
                this.game.playerTurn.boatColor = undefined;
            }
        }
        // Check if next turn expected
        if (action instanceof EndTurnAction || action instanceof GiveCardsAction || action instanceof BuyBoatAction) {
            this.game.turnCount += 1;
            this.game.playerTurn = this.game.players[this.game.turnCount % this.game.players.length];
        }
        // Check if player has won
        this.game.winningPlayer = this.game.players.find(player => player.hasWon());
        // Fire event
        const gameCopy = { ...this.game };
        this.listeners.forEach(listener => listener(gameCopy));
    }


}