/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.js"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
    theme: {
        extend: {
            screens: {
                mobile: "576px",
                // => @media (min-width: 576px) { ... }

                tablet: "768px",
                // => @media (min-width: 768px) { ... }

                laptop: "1024px",
                // => @media (min-width: 1024px) { ... }

                desktop: "1200px",
                // => @media (min-width: 1280px) { ... }

                "2desktop": "1400px",
                // => @media (min-width: 1536px) { ... }

                "max-2desktop": { max: "1400px" },
                // => @media (max-width: 1535px) { ... }

                "max-desktop": { max: "1200px" },
                // => @media (max-width: 1279px) { ... }

                "max-laptop": { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                "max-tablet": { max: "767px" },
                // => @media (max-width: 767px) { ... }

                "max-mobile": { max: "576px" },
                // => @media (max-width: 576px) { ... }
                "min-mobile": { min: "576px" },
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                },
                screens: {
                    xl: "1200px",
                    "2xl": "1400px",
                },
            },
            colors: {
                primary: {
                    main: "#214f50",
                    light: "#4e7b7c",
                    dark: "#002628",
                },
                secondary: {
                    main: "#d4ecdd",
                    light: "#ffffff",
                    dark: "#a3baab",
                },
            },
            backgroundImage: {
                pattern: "url('https://yanalshoubaki.com/images/bg-light.svg')",
                "pattern-dark": "url('https://yanalshoubaki.com/images/bg-dark.svg')",
            },
        },
    },
};
