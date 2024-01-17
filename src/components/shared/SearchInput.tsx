'use client'

import { useUIStore } from '@/store'
import { Input } from '@nextui-org/react'
import { useState } from 'react'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'

const SearchInput = () => {
    const setSearch = useUIStore(store => store.setSearch)
    const [valueInput, setValueInput] = useState('')

    const handleSearch = () => {
        setSearch(valueInput.toLocaleLowerCase())
    }

    return (
        <Input
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            classNames={{
                inputWrapper: 'bg-red-400 rounded-full max-h-8 bg-container w-full sm:w-[280px]',
            }}
            placeholder="search"
            onKeyUp={(e) => {
                if (e.key === 'Enter') {
                    handleSearch()
                }
            }}
            startContent={
                <button onClick={() => handleSearch()}>
                    <HiMagnifyingGlass className="text-2xl pointer-events-none flex-shrink-0 w-5 h-5 text-primary" />
                </button>
            }
            endContent={
                <button onClick={() => {
                    setSearch('')
                    setValueInput('')
                }} style={{ display: valueInput.length > 0 ? 'block' : 'none' }}>
                    <HiXMark className="text-2xl pointer-events-none flex-shrink-0 w-5 h-5 text-primary" />
                </button>
            }
        />
    )
}

export default SearchInput