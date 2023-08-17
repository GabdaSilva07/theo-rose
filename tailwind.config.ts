import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-40%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: '1',
          },
        },
      },
        animation: {
            "slide-in-left": "slide-in-left 0.5s ease-out",
        }
    },
  },
  plugins: [],
}
export default config
