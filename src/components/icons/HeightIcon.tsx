import { clsx } from 'clsx'
import { SVGComponent } from '@/types'

export const HeightIcon = ({ className }:SVGComponent) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={clsx('w-4 h-4 fill-none', className)}
    >
      <path
        fill="#1D1D1D"
        d="M4.5 2.333c0-.266.1-.5.3-.7.2-.2.433-.3.7-.3h6c.256 0 .486.1.692.3.205.2.308.434.308.7v11.334c0 .266-.103.5-.308.7-.206.2-.436.3-.692.3h-6a.96.96 0 01-.7-.3.96.96 0 01-.3-.7V2.333zm1 0v11.334h6V11.5h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3V2.333h-6zm3 2.167v1-1zm0 3v1-1zm0 3v1-1z"
      ></path>
    </svg>
  )
}
