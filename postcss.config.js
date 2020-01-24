module.exports = {
  plugins: {
    // postcss-px-to-viewport 配置
    "postcss-import": {},
    "postcss-preset-env": {},
    "postcss-pxtorem": {
      rootValue: 37.5, // 视口的宽度，对应设计稿的宽度
      viewprotHeight: 667, // 视口的高度，对应设计稿的高度 （也可以不设置）
      unitPrecision: 5,  // 指定'px'转换为视窗单位值的小数位数
      propList: ["*"],
      selectorBlackList: [".ignore", ".hairlines"], // 指定不需要转换的类
      replace: true,
      mediaQuery: false, // 是否允许在媒体查询中转换'px'
      minPixelValue: 1, // 小于或者等于'1px'不转换为视窗单位
      viewprotUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      exclude: []  // 不修改那些文件 -> [] 里需要用正则表达式的形式写 文件名 如[/TabBar/]
    },
    "cssnano": {
      "cssnano-preset-advanced": {
        zindex: false,
        autoprefixer: false
      }
    }
  }
};
