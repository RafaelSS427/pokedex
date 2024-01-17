import { ReactNode } from 'react'

export const AboutPokeItem = ({
    icon, title, value, abilities
}: {
    icon?: ReactNode;
    value?: string;
    abilities?: string[];
    title: string;
}) => (
    <div className="flex flex-col gap-2 px-3 lg:px-6 py-2 ">
        <div className="flex items-center gap-2">
            {
                icon && value ? (
                    <>
                        {icon}
                        <p>{value}</p>
                    </>
                ) : (
                    <div className="flex flex-col gap-1">
                        {
                            abilities && abilities.map((abilitie, i) => (
                                <p key={abilitie + i} className="text-base capitalize">{abilitie}</p>
                            ))
                        }
                    </div>
                )
            }
        </div>
        <p className="text-center text-[#666] text-sm">{title}</p>
    </div>
)