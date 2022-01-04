module.exports = {
    devServer: {
        host: '0.0.0.0',
        https: true
    }
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/scss/vars.scss";`
            }
        }
    }
};