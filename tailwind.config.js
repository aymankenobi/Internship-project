// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font:['RazerF5', 'arial'],
      },
      borderRadius: {
        'extraRounded': '1rem', // Add a custom borderRadius
      },
    },
  },
  plugins: [],
};
