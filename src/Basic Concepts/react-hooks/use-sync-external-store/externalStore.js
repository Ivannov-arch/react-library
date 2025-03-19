let state = { pokemons: [] } // Initial state
let listeners = []; // List of subscribers

export const fetchPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    state = { ...state, pokemons: data.results };
    listeners.forEach((listener) => listener(state)); // notify all the subscribers
}

export const getState = () => state; // get the current state

export const subscribe = (listener) => {
    listeners.push(listener); // subscribe a new listener

    return () => {
        listeners = listeners.filter((l) => l !== listener); // unsubscribe a listener
    }
}