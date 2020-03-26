import React, { useState } from 'react'

const AddPlayerComponent = ({ 
    name, 
    setName,
    remove
} : {
    name: string,
    setName: (name: string) => void,
    remove: () => void
}) => {
    return <div>
        <input 
            type="text" 
            value={name} 
            onChange={ e => setName(e.target.value)} 
            placeholder="Player name..."
        />
        <button onClick={remove}>X</button>
    </div>
}

export const CreateGamePanel = ({ createGame } : {
    createGame: (players: Array<string>) => void
}) => {
    const [players, setPlayers] = useState([{ name: ""}, { name: ""} ]);
    return <div>
        {players.map( (player, i) => <AddPlayerComponent 
            key={i} 
            name={player.name} 
            setName={name => {
                setPlayers(players.map( item => item === player? ({ name }) : item ));
            }}
            remove={() => setPlayers(players.filter( item => item !== player ))} 
        />)}
        <button 
            disabled={players.length === 4} onClick={() => setPlayers([...players, { name: "" }])}>Add player</button>
        <button 
            onClick={ () => createGame(players.map( player => player.name))}
            disabled={ players.length === 0 || players.length > 4}
        >
                Start Game!
        </button>
    </div>
}