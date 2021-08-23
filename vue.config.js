module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets : '@/assets',
        components: '@/components',
        views: "@/views",
        utils: "@/utils"
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