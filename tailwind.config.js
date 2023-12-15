// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{html,js}",
//     "./node_modules/tw-elements/dist/js/**/*.js",
//   ],
//   plugins: [require("tw-elements/dist/plugin.cjs")],
//   darkMode: "class"
// };

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  class: 'dark',
  content: [
    "index.html",
    "src/**/*.{vue,js,ts,jsx,tsx}",
    "src/**/*.{html,js}",
    "node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    backgroundImage: {
        'bg-lg': "url('src/assets/bg-lg.png')",
        'bg-sm': "url('src/assets/bg-sm.png')",
        'bg-form': "url('src/assets/bg-form.png')",
      },
    extend: {
      colors: {
        'primary-bordo': '#54192D',
        'second-bordo': '#3D1825'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],

}
