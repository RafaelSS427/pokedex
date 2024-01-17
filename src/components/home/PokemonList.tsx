'use client'

import { PokemonCard } from './'
import { useUIStore } from '@/store'
import { sortPokemonBy } from '@/utils'
import { SimplePokemon } from '@/types'
import { useEffect } from 'react'

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonList = ({ pokemons }:Props) => {

    const { search, sortBy, setSearch } = useUIStore()

    useEffect(() => {
        return () => {
            search.length > 0 && setSearch('')
        }
    }, [search, setSearch])

    return (
        <div className="grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {
                sortPokemonBy([...pokemons], sortBy, search).map((pokemon, i) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}