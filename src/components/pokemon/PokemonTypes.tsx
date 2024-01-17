import { POKEMON_COLORS } from '@/config'

interface Props {
    types: string[]
}

export const PokemonTypes = ({ types }: Props) => {
    return (
        <div className="flex justify-center gap-4">
            {
                types.map((type) => (
                    <span
                        key={type}
                        style={{
                            backgroundColor: POKEMON_COLORS[type as keyof object]
                        }}
                        className="rounded-full text-white px-3 py-1 capitalize font-semibold text-small"
                    >
                        {type}
                    </span>
                ))
            }
        </div>
    )
}