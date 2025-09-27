import BronConfig from 'tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    presets: [BronConfig],
    plugins: [],
}
