/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
     colors: {
        rosewine: '#9c425d',
        oceanblue: '#329fba',
        peach: '#e39462',
        plum: '#784e7d',
        darkplum: '#652f6c',
        pumpkin: '#e47e3d',
        lavender: '#dfdceb',
        paleLavender: '#eae7f0',
        warmWhite: '#faf7f3',
        primary: '#0d93a1',
        tealSoft: '#46aead',
        deepBlue: '#236a95',
        warmOrange: '#e99864',
        peachyOrange: '#eba273',
        peachyOrangeLight: '#f0b890',
           paleLavender: '#EAE6F8',
      },
     keyframes: {
        'marquee-bounce': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'marquee-bounce': 'marquee-bounce 10s linear infinite',
      },},
      
  },
  plugins: [],
}

