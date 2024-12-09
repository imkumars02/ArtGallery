/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure all the relevant files with Tailwind CSS classes are included
    "./src/**/*.{js,jsx,ts,tsx}", // This covers all files under src directory with .js, .jsx, .ts, .tsx extensions
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideDown: 'slideDown 0.3s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
