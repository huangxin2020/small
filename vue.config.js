// 这里配置的设置会自动与vue的设置结合
module.exports = {
  configureWebpack: {
    // 对路径进行配置使用resolve
    resolve: {
      extensions: [], // 通过配置它可以不写后缀 cli3之后都默认配置了
      // 别名的配置 以后再引用的时候就可以不用写 ./ 了
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
