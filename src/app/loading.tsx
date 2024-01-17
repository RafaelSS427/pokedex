import { PokeballIcon } from '@/components'

const loading = () => {
  return (
    <div className="bg-primary w-screen h-screen grid place-content-center">
      <div className="flex">
        <PokeballIcon className="mr-4 lg:w-8 lg:h-8" />
        <p className="font-bold text-inherit text-2xl lg:text-3xl text-white">Pokédex</p>
      </div>
    </div>
  )
}

export default loading