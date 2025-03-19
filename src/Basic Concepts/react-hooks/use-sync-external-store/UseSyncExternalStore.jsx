// import { useEffect, useState } from 'react'
import { useEffect, useSyncExternalStore} from 'react'
import { fetchPokemons, getState, subscribe } from './externalStore';

export default function UseSyncExternalStore() {
    //#region : local useEffect()
    // const [pokemons, setPokemons] = useState([]);

    // useEffect(() => {
    //     const getPokemons = async () => {
    //         const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    //         const data = await res.json();
    //         setPokemons(data.results);
    //     }

    //     getPokemons();
    // })

    //#endregion

    // const state = useSyncExternalStore(subscribeWithSelector, getSnapShot, getServerSnapshot);
    const { pokemons } = useSyncExternalStore(subscribe, getState)

    useEffect(() => {
        fetchPokemons();
    })    

  return (
    <div>
        <code>
            <p>{`useSyncExternalStore allows you to subscribe to an external store and get the latest snapshot of the store's state.`}</p>
        </code> <hr /> <br /> <br />

        <h1>Pokemon List</h1>
        <ul>
            {pokemons.length === 0 ?
                <p>Loading...</p>
                :
                pokemons.map((pokemon, index) => (
                    <li key={index}>{index}. {pokemon.name}</li>
                ))
            }
        </ul>
    </div>
  )
}
