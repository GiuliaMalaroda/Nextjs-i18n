const withTranslateRoutes = require('next-translate-routes/plugin');
const nextTranslate = require('next-translate');

const nextConfig = withTranslateRoutes(
    nextTranslate({
        reactStrictMode: true
    })
);

const logRR = async () => {
    console.log('From next.config.', { rewrites: await nextConfig.rewrites(), redirects: await nextConfig.redirects() })
}
  
logRR();

module.exports = nextConfig;