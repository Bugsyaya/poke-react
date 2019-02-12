const API_URL = 'https://pokeapi.co/api/v2'


export const getPokemons = () => fetch(`${API_URL}/pokemon`)
export const getPokemon = (name) => fetch(`${API_URL}/pokemon/${name}`)
export const getType = (name) => fetch(`${API_URL}/type/${name}`)