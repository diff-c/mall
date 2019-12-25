module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // "@": resolve("src"),
        assets: "@/assets",
        components: "@/components",
        common: "@/common",
        network: "@/network",
        views: "@/views"
      }
    }
  }
}
