import { getPokemonIdText } from '@/utils'
import Link from 'next/link'
import React from 'react'
import { HiArrowLeft } from 'react-icons/hi2'

interface Props {
    id: string;
    name: string
}

export const NavPokeInfo = ({ id, name }:Props) => {
    return (
        <nav className="flex items-center justify-between w-full flex-wrap px-5 py-6">
            <div className="flex items-center gap-2">
                <Link href="/" className="inline-block">
                    <HiArrowLeft className="w-6 h-6 text-white" />
                </Link>
                <p className="font-bold text-inherit text-xl lg:text-2xl text-white capitalize">{name}</p>
            </div>

            <small className="text-small text-end lg:text-base text-white font-bold">{getPokemonIdText(id)}</small>
        </nav>
    )
}
