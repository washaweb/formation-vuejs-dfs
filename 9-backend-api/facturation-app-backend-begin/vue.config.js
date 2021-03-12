module.exports = {
  outputDir: 'dist_export',
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
          // eslint-disable-next-line no-param-reassign
          options.transformAssetUrls = {
              img: 'src',
              image: 'xlink:href',
              'b-img': 'src',
              'b-img-lazy': ['src', 'blank-src'],
              'b-card': 'img-src',
              'b-card-img': 'img-src',
              'b-carousel-slide': 'img-src',
              'b-embed': 'src'
          }

          return options
      })
  }
}