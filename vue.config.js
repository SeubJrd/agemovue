module.exports = {
    devServer: {
        host: '0.0.0.0',
        https: true
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @use 'sass:math';
                    @import "@/scss/vars.scss";
                `
            }
        }
    }
}