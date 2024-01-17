'use client'

import { useState } from 'react'
import { Button, PopoverTrigger, PopoverContent, Popover } from '@nextui-org/react'
import { HiHashtag } from 'react-icons/hi'
import { FaA } from 'react-icons/fa6'
import { CheckboxFilters } from '../'
import { useUIStore } from '@/store'

export const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const sortBy = useUIStore(store => store.sortBy)

    return (
        <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} backdrop="opaque" placement="bottom-end" classNames={{
            base: "bg-transparent",
            content: "bg-primary p-1 rounded-xl"
        }}>
            <PopoverTrigger>
                <Button
                    variant="light"
                    className="bg-container h-8 w-8 lg:h-9 lg:w-9 p-2 rounded-full min-w-0 data-[hover=true]:bg-white/80"
                >
                    {
                        sortBy === 'id' ? (
                            <HiHashtag className="w-4 h-4 lg:h-6 lg:w-6 text-primary" />
                            ) : (
                            <FaA className="h-4 w-4 text-primary" />
                        )
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-32">
                <div className="w-full">
                    <p className="text-center text-xs lg:text-sm px-5 py-4 font-[700] text-white">Sort by</p>

                    <CheckboxFilters setIsOpen={setIsOpen} />
                </div>

            </PopoverContent>
        </Popover>
    )
}