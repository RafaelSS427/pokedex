import { FC } from 'react'
import { clsx } from 'clsx'
import { SVGComponent } from '@/types'

export const PokeballIcon:FC<SVGComponent> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={ clsx('w-6 h-6 fill-none', className) }
        >
            <path
                fill="#fff"
                d="M14.857 12a2.857 2.857 0 11-5.714 0 2.857 2.857 0 015.714 0z"
            ></path>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M12 24c6.045 0 11.047-4.47 11.878-10.286H16.85a5.145 5.145 0 01-9.7 0H.122C.953 19.53 5.955 24 12 24zM7.15 10.286H.122C.953 4.47 5.955 0 12 0s11.047 4.47 11.878 10.286H16.85a5.145 5.145 0 00-9.7 0zM14.857 12a2.857 2.857 0 11-5.714 0 2.857 2.857 0 015.714 0z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}