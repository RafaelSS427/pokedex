import { PokemonList } from '@/components/home'
import { PokemonResponse, SimplePokemon } from '@/types'

const getPokemons = async (): Promise<SimplePokemon[]> => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', { cache: 'no-store' })

  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  const pokemons: PokemonResponse = await result.json()

  const getPokemonsSimpleData = pokemons.results.map(({ name, url }) => ({
    id: url.split('/').at(-2)!,
    name
  }))

  return getPokemonsSimpleData
}

export default async function HomePage() {
  const pokemons = await getPokemons()

  return (
    <div id="pokemon-list" className="bg-container rounded-lg px-4 py-6 mt-4 h-[calc(100vh-(124px+24px))] sm:h-[calc(100vh-(84px+24px))] overflow-x-auto">
        <PokemonList pokemons={pokemons} />
    </div>
  )
}