/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter-tight': ['Inter Tight', 'system-ui', '-apple-system', 'sans-serif'],
            },
            letterSpacing: {
                'tightest': '-0.04em',
                'extra-tight': '-0.035em',
            },
            lineHeight: {
                'tighter': '0.9',
                'super-tight': '0.85',
            }
        },
    },
    plugins: [],
} 