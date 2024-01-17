'use client'

import NextImage from 'next/image'
import { SimplePokemon } from '@/types'
import { Card, CardBody } from '@nextui-org/react'
import { FC } from 'react'
import Link from 'next/link'
import { getPokemonIdText } from '@/utils'

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const { id, name } = pokemon

    return (
        <Card as={Link} href={`/pokemon/${ id }`} isPressable shadow="lg" radius="md" className="relative border border-black/5 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[45%] before:bg-[#EFEFEF] before:rounded-t-2xl overflow-hidden">
            <CardBody className="flex flex-col gap-1 py-2 px-2 text-[#1D1D1D]">
                <small className="text-xs text-end lg:text-small text-[#666]">{ getPokemonIdText(id) }</small>

                <div className="flex justify-center flex-1">
                    <div className="relative w-[72px] h-[72px]">
                        <NextImage
                            // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 200px"
                            fill
                            className="object-contain"
                            alt={name}
                        />
                    </div>
                </div>

                <p className="text-sm lg:text-base text-center">{name}</p>
            </CardBody>
        </Card>
    )
}