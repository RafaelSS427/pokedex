import { MAX_POKEMON_STAT, POKEMON_COLORS, POKEMON_STATS_SHORTEN } from '@/config'
import { hexToRgba } from '@/utils';

interface Props {
    mainType: string;
    stats: {
        base_stat: number;
        name: string;
    }[],
}

export const BaseStatsPoke = ({ mainType, stats }: Props) => {
    return (
        <div className="flex flex-col gap-2 px-5 pb-4 text-[#1D1D1D]">
            <h2 style={{ color: POKEMON_COLORS[mainType as keyof object] }} className="font-bold text-center text-lg lg:text-xl">Base Stats</h2>

            <div className="grid grid-cols-12">
                <div className="relative col-span-2 before:absolute before:content-[''] before:right-[12px] lg:before:right-[20px] before:top-0 before:h-full before:w-[1px] before:bg-[#E0E0E0]">
                    <div className="flex flex-col gap-1">
                        {
                            stats.map(({ name }) => (
                                <small
                                    key={crypto.randomUUID()}
                                    style={{ color: POKEMON_COLORS[mainType as keyof object], }}
                                    className="text-sm font-bold uppercase"
                                >
                                    { POKEMON_STATS_SHORTEN[name as keyof object] }
                                </small>
                            ))
                        }
                    </div>

                </div>

                <div className="col-span-10">
                <div className="flex flex-col gap-1">
                    {
                        stats.map(({ base_stat }) => (
                            <div key={crypto.randomUUID()} className="flex gap-4 items-center">
                                <small className="text-sm">{base_stat.toString().length > 2 ? base_stat : `0${base_stat}`}</small>
                                <div style={{ backgroundColor: hexToRgba(POKEMON_COLORS[mainType as keyof object], 0.2) }} className="w-full rounded-full h-1.5">
                                    <div
                                        className="h-1.5 rounded-s-full"
                                        style={{
                                            backgroundColor: POKEMON_COLORS[mainType as keyof object],
                                            width: `${((base_stat / MAX_POKEMON_STAT) * 100).toFixed(0)}%`
                                        }}
                                    />
                                </div>
                            </div>
                        ))
                    }
                    </div>

                </div>


            </div>

        </div>
    )
}
