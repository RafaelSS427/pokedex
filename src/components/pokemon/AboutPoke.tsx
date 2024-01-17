import { POKEMON_COLORS } from '@/config'
import { HeightIcon, WeightIcon } from '../'
import { AboutPokeItem } from './AboutPokeItem'
import { getWeightOrHeight } from '@/utils'

interface Props {
    mainType: string;
    abilities: string[];
    weight: number;
    height: number;
    flavor_text: string;
}

export const AboutPoke = ({ mainType, abilities, height, weight, flavor_text }: Props) => {
    return (
        <div className="flex flex-col gap-2 items-center px-5 pb-4 text-[#1D1D1D]">
            <h2 style={{ color: POKEMON_COLORS[mainType as keyof object] }} className="font-bold text-center text-lg lg:text-xl">About</h2>

            <div className="flex gap-2 items-center">
                <AboutPokeItem icon={<WeightIcon className="w-6 h-6" />} value={`${ getWeightOrHeight(weight) } kg`} title='Weight' />
                <span className="h-16 w-[1px] bg-[#E0E0E0]" />
                <AboutPokeItem icon={<HeightIcon className="w-6 h-6" />} value={`${ getWeightOrHeight(height) } m`} title='Height' />
                <span className="h-16 w-[1px] bg-[#E0E0E0]" />
                <AboutPokeItem abilities={abilities} title='Moves' />
            </div>

            <p className="text-sm">{ flavor_text }</p>
        </div>
    )
}