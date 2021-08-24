module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets : '@/assets',
        components: '@/components',
        views: "@/views",
        utils: "@/utils",
        common: "@common"
      }
    }
  },
  devServer: {
    proxy: "http://localhost:3000"
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  }
}