/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            },
            colors: {
                sacs: {
                    burgundy: '#A34354',
                    rose: '#E0BEC8',
                    purple: '#402E6D',
                    muted: '#867698',
                },
            },
            maxWidth: {
                'sacs': '1280px',
            },
        },
    },
    plugins: [],
};
