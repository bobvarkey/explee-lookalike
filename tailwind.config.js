/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
      colors: { paper: '#f6f5f3', ink: '#141414', brand: { 50: '#f3fcf9', 100: '#dbf5ec', 300: '#7cd9ba', 500: '#10b981', 600: '#0f9d6e', 700: '#0d7f5a' } },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        twinkle: { '0%,100%': { opacity: '.25' }, '50%': { opacity: '1' } },
      },
      animation: { marquee: 'marquee 60s linear infinite', 'marquee-rev': 'marquee 70s linear infinite reverse', twinkle: 'twinkle 3s ease-in-out infinite' },
    },
  },
  plugins: [],
}
