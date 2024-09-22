module.exports = {
    darkMode: 'class', // or 'media' or false
    plugins: [
        require('daisyui'),
        require('@unocss/postcss')({
            /* options */
        }),
    ],
    daisyui: {
        themes: ['light', 'dark'], // Ensure both themes are enabled
    },
};