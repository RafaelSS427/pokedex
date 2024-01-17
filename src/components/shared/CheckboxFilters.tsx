'use client'

import { Dispatch, SetStateAction, memo } from 'react'
import { CustomCheckbox } from '../ui'
import { useUIStore } from '@/store';

type Options = 'number' | 'name'

interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CheckboxFilters = ({ setIsOpen }:Props) => {
    const setSortBy = useUIStore(store => store.setSortBy)
    const sortBy = useUIStore(store => store.sortBy)

    const handleCheckbox = (optionType: Options) => {
        setIsOpen(false)

        if(optionType === 'number'){
            return setSortBy('id')
        }

        setSortBy('name')
    }

    return (
        <div className="flex flex-col gap-4 bg-container rounded-xl px-5 py-4">
            <CustomCheckbox isSelected={ sortBy === 'id' } onValueChange={() => handleCheckbox('number')} value="number" label="Number" />
            <CustomCheckbox isSelected={ sortBy === 'name' }  onValueChange={() => handleCheckbox('name')} value="name" label="Name" />
        </div>
    )
}
