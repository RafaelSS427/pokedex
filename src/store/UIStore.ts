import { create } from 'zustand'

type SortBy = 'id' | 'name'

interface UIBase {
    sortBy: SortBy,
    search: string
}

interface UIState extends UIBase {
    setSortBy: (sortBy: SortBy) => void,
    setSearch: (search: string) => void
}

export const useUIStore = create<UIState>((set) => ({
    sortBy: 'id',
    search: '',
    setSortBy(sortBy) {
        set(state => ({...state, sortBy}))
    },
    setSearch(value) {
        set(state => ({...state, search: value}))
    },
}))