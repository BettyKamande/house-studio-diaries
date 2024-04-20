import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      'background': '#f2ede5',
      'primary': '#4b451b',
      'secondary': '#b2ac88',
      'dark': '#1b1b1b'
     },
     fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'merriweather': ['Merriweather', 'serif'],
    }
    },
  },
  plugins: [],
};
export default config;
