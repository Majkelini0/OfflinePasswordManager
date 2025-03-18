/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: 'var(--dark)',
                medium: 'var(--medium)',
                light: 'var(--light)',
                beige: 'var(--beige)',
            },
        },
    },
    plugins: [],
}