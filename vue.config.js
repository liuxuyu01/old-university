module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' //部署路径
    //     ? '/production-sub-path/'
    //     : '/'
    chainWebpack: config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 10240 }))  //将小于10kb的图片内联，减少http请求数量
      },
      //css的全局变量
      css: {
        loaderOptions: {
              scss: {
                additionalData: `@import "~@/styles/common/variable.scss";`
              },
        },
    },

}