export const getPokemonIdText = (id: string) => {
    return `#${id.length === 3 ? id : id.length === 2 ? `0${id}` : `00${id}`}`
}

export const getWeightOrHeight = (value: number): string => {
    const digitCount = value.toString().length;
    const divider = digitCount > 2 ? Math.pow(10, digitCount - 1) : 10;
    const result =  (value / divider).toFixed(1);

    return result
} 