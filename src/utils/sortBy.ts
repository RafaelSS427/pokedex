import { SimplePokemon } from '@/types'

type SortType = 'id' | 'name'

export const sortPokemonBy = (pokemons: SimplePokemon[], sortType:SortType, search: string):SimplePokemon[] => {

    if(search.length > 0){
        return pokemons.filter(pokemon => pokemon.name.includes(search))
    }

    return pokemons.sort((a, b) => sortType === 'id' ? parseInt(a.id) - parseInt(b.id) : a.name.localeCompare(b.name))
}