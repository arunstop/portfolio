/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      gap: {
        i: 'inherit',
      },
      rotate: {
        360: '360deg',
      },
    },
    fontFamily: {
      'work-sans': ['Work Sans', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss/plugin')(function ({ addVariant, matchVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('children', '&>*')
      matchVariant('every', (value) => `&>${value}`)
    }),
  ],
}
