const withTranslateRoutes = require('next-translate-routes/plugin');
const nextTranslate = require('next-translate');

module.exports = withTranslateRoutes(
    nextTranslate({
        reactStrictMode: true
    })
);