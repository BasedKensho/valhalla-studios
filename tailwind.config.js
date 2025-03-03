/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#996515',
        silver: '#C0C0C0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'card': '0px 8px 16px rgba(0, 0, 0, 0.15)',
        'glow-gold': '0 0 15px rgba(153, 101, 21, 0.3)',
        'glow-silver': '0 0 15px rgba(192, 192, 192, 0.3)',
        'input-hover': '0 0 15px rgba(192, 192, 192, 0.15)',
        'input-focus': '0 0 20px rgba(192, 192, 192, 0.3)',
      },
      backgroundImage: {
        'mesh-pattern': 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
        'geometric-pattern': 'linear-gradient(30deg, rgba(255,255,255,0.05) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.05) 87.5%, rgba(255,255,255,0.05)), linear-gradient(150deg, rgba(255,255,255,0.05) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.05) 87.5%, rgba(255,255,255,0.05)), linear-gradient(30deg, rgba(255,255,255,0.05) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.05) 87.5%, rgba(255,255,255,0.05)), linear-gradient(150deg, rgba(255,255,255,0.05) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.05) 87.5%, rgba(255,255,255,0.05)), linear-gradient(60deg, rgba(255,77,0,0.1) 25%, transparent 25.5%, transparent 75%, rgba(255,77,0,0.1) 75%, rgba(255,77,0,0.1)), linear-gradient(60deg, rgba(255,77,0,0.1) 25%, transparent 25.5%, transparent 75%, rgba(255,77,0,0.1) 75%, rgba(255,77,0,0.1))',
      },
    },
  },
  plugins: [],
};