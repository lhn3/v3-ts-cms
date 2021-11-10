module.exports = {
  outputDir: 'build',
  publicPath: './',
//  配置代理
  devServer:{
    proxy:{
      //将/api开头的url
      '^/api':{
        //用这个url代替
        target:'http://152.136.185.210:5000',
        //并将/api清空
        pathRewrite:{
          '^/api':''
        },
        changeOrigin:true
      }
    }
  }

}
