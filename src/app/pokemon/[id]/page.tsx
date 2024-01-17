import { NextPage } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'
import { AboutPoke, BaseStatsPoke, NavPokeInfo, PokemonTypes } from '@/components'
import { POKEMON_COLORS, POKEMON_VERSION } from '@/config'
import { PokemonDataResponse, PokemonDataSummary, PokemonSpeciesResponse } from '@/types'


interface Props {
  params: { id: string }
}

const getPokemon = async (id: string): Promise<PokemonDataSummary> => {
  noStore()
  const [pokemonData, pokemonSpecies] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
  ])

  if (!pokemonData.ok || !pokemonSpecies.ok) {
    notFound()
  }

  const { weight, height, abilities, types, stats, name }: PokemonDataResponse = await pokemonData.json()
  const { flavor_text_entries }: PokemonSpeciesResponse = await pokemonSpecies.json()

  const pokemonDataSummary: PokemonDataSummary = {
    name,
    weight,
    height,
    abilities: abilities.map(({ ability }) => ability.name),
    types: types.map(({ type }) => type.name),
    stats: stats.map(({ base_stat, stat }) => ({
      base_stat,
      name: stat.name
    })),
    flavor_text: flavor_text_entries.find(({ version }) => version.name === POKEMON_VERSION)?.flavor_text || ''
  }

  return pokemonDataSummary
}

const PokemonPage: NextPage<Props> = async ({ params }) => {

  const { types, name, abilities, weight, height, flavor_text, stats } = await getPokemon(params.id)
  const aboutPoke = { abilities, weight, height, flavor_text }

  return (
    <div style={{ backgroundColor: `${POKEMON_COLORS[types[0] as keyof object]}` }} className="w-full min-h-screen">
      <main className="container max-w-screen-lg p-1 mx-auto">
        <NavPokeInfo name={ name } id={ params.id } />

        <div className="relative bg-container mt-[200px] rounded-lg">

          <div className="absolute top-[-150px] left-[50%] translate-x-[-50%]">
            <div className="relative w-[200px] h-[200px]">
              <Image
                // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${params.id}.svg`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 200px"
                className="object-contain"
                alt={name}
              />
            </div>
          </div>

          <div className="pt-14 flex flex-col gap-4">
            <PokemonTypes types={types} />

            <div className="grid grid-cols-1 md:grid-cols-2">
              <AboutPoke mainType={ types[0] } {...aboutPoke} />

              <BaseStatsPoke mainType={ types[0] } stats={stats} />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default PokemonPage