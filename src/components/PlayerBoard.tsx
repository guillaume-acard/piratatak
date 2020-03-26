import React from 'react'
import { CardList } from './CardList'
import { CardType, BoatCard, Card } from '../game/model/Card'
import { Player } from '../game/model/Player'
import { ShipYard } from './Shipyard'
import { Action, BuyBoatAction, GiveCardsAction, EndTurnAction } from '../game/model/Actions'
import { playCannon, playHoNo } from '../game/Sounds'

export const PlayerBoard = ({ player, playerTurn, selectedCards, setSelectedCards, dispatch } : {
    player: Player,
    playerTurn: Player,
    selectedCards: Array<Card>,
    setSelectedCards: (cards: Array<Card>) => void
    dispatch: (action: Action) => void
}) => {
    const setSelected = (card: Card) => {
        if(selectedCards.includes(card)){
            setSelectedCards(selectedCards.filter(_card => _card !== card));
        }else{
            setSelectedCards([...selectedCards, card]);
        }
    }

    const selectedBoatCard = selectedCards.length === 1 && selectedCards[0].type === CardType.BOAT? selectedCards[0] as BoatCard : null; 
    const selectedCannons = selectedCards.filter( card => card.type === CardType.CANNON );
    return <div key={player.name} className={`player ${playerTurn === player? "active": "inactive"}`}>
        <h2>{player.name}</h2>
        <div className="split">
            <div>
                <h4>Shipyard</h4>
                <ShipYard 
                    cards={player.cards.filter( card => card.type === CardType.BOAT && (card as BoatCard).color === player.boatColor).map(card => card as BoatCard)}
                    selectedCards={selectedCards}
                    setSelected={setSelected}
                    canSelect={() => player === playerTurn }
                />
            </div>
            <div>
                <h4>Cannons</h4>
                <CardList 
                    cards={player.cards.filter( card => card.type === CardType.CANNON)} 
                    selectedCards={selectedCards} 
                    setSelected={ setSelected } 
                    canSelect={ card => playerTurn === player }
                    cardOrientation="horizontal"
                />
            </div>
        </div>
        <h4>Treasure</h4>
        <CardList 
            cards={player.cards.filter( card => card.type === CardType.GOLD_COIN)} 
            selectedCards={selectedCards} 
            setSelected={ setSelected } 
            canSelect={ card => playerTurn === player && playerTurn.lastCardIsPirate() }
        />
        <CardList 
            cards={player.cards.filter( card => card.type === CardType.BOAT && (card as BoatCard).color !== player.boatColor)} 
            selectedCards={selectedCards} 
            setSelected={ setSelected } 
            canSelect={ card => (playerTurn === player && playerTurn.lastCardIsPirate()) || (card as BoatCard).color === playerTurn.boatColor }
        />
        {player === playerTurn && <div>
            {!player.lastCardIsPirate() && <>
                <button onClick={() => dispatch(new EndTurnAction())}>End Turn</button>
                <button 
                    disabled={!(selectedBoatCard && selectedBoatCard.color === player.boatColor && !player.cards.includes(selectedBoatCard) && player.cards.filter( card => card.type === CardType.GOLD_COIN).length >= 3)} 
                    onClick={() => {
                    dispatch(new BuyBoatAction(selectedCards[0]));
                    setSelectedCards([]);
                }}>Buy Boat</button>
            </>}
            {player.lastCardIsPirate() &&  <>
                
                {selectedCannons.length === 0 && <button 
                    disabled={selectedCards.length < Math.min(3, player.cards.length - 1) || selectedCards.length > 3} 
                    onClick={() => {
                        dispatch(new GiveCardsAction(selectedCards));
                        setSelectedCards([]);
                        playHoNo();
                    }}
                >{Math.min(3, player.cards.length - 1) > 0? "Give Cards" : "End Turn"}</button>}
                {selectedCannons.length > 0 && <button onClick={() => {
                    dispatch(new GiveCardsAction([selectedCannons[0]]));
                    setSelectedCards([]);
                    playCannon();
                }}>Use Cannon!</button>}
            </>}
        </div>}
    </div>
}