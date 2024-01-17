import { NavbarBrand, NavbarContent, NavbarItem, Navbar } from '@nextui-org/react'
import { PokeballIcon } from '@/components'
import { CustomDropdown } from './'
import SearchInput from '../shared/SearchInput'

export const CustomNavbar = () => {
  return (
    <Navbar className="bg-[#DC0A2D]" classNames={{
      wrapper: "px-4 lg:p-1 grid grid-cols-1 sm:flex sm:grid-cols-none h-auto", //flex-wrap
      base: "py-4"
    }}>
      <NavbarBrand>
        <PokeballIcon className="mr-4 lg:w-8 lg:h-8" />
        <p className="font-bold text-inherit text-2xl lg:text-3xl text-white">Pokédex</p>
      </NavbarBrand>
      <NavbarContent className="!justify-start md:!justify-end">
        <NavbarItem className="flex-1 sm:flex-initial">
          <SearchInput />
        </NavbarItem>
        <NavbarItem>
          <CustomDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
