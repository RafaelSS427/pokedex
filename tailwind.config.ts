import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // nextui
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          // background: '#DC0A2D',
          //foreground: '#FFFFFF',

          primary: {
            DEFAULT:"#DC0A2D"
          },
          secondary: {
            DEFAULT:"transparent"
          }
        }
      }
    }
  })],
}
export default config