import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './Providers'
import './globals.css'

const inter = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Información sobre pokemons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}