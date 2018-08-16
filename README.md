# 企易税小程序项目说明
- 这是一个小程序项目, 使用wepy作为小程序组件化开发框架
- 项目名称:tax-mp; 小程序appid: wxb9c842c2856727e8 

# 项目创建与使用
	全局安装 npm install wepy-cli -g
	安装依赖  npm  install
	开启实时编译 wepy build --watch
   
- [下载小程序开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
	导入dist目录查看效果,appid使用小程序测试号
- [代码高亮设置](https://tencent.github.io/wepy/document.html#/?id=%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE) 参考VS Code设置部分
- 推荐插件 搜索关键词 wepy,全部安装 

# wepy参考文档
- [wepy github](https://github.com/Tencent/wepy)
- [官方文档] (https://tencent.github.io/wepy/document.html#/)
    
## WePY项目的目录结构
	├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
	├── node_modules           
	├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
	|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
	|   |   ├── com_a.wpy      可复用的WePY组件a
	|   |   └── com_b.wpy      可复用的WePY组件b
	|   ├── pages              WePY页面目录（属于完整页面）
	|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
	|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
	|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
	└── package.json           项目的package配置


## [单文件模式，目录结构更清晰，开发更方便](https://tencent.github.io/wepy/document.html#/?id=%E5%8D%95%E6%96%87%E4%BB%B6%E6%A8%A1%E5%BC%8F%EF%BC%8C%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E6%9B%B4%E6%B8%85%E6%99%B0%EF%BC%8C%E5%BC%80%E5%8F%91%E6%9B%B4%E6%96%B9%E4%BE%BF)
	原生小程序要求app实例必须有3个文件：app.js、app.json、app.wxss，而page页面则一般有4个文件：page.js、page.json、page.wxml、page.wxss，并且还要求app实例的3个文件以及page页面的4个文件除后缀名外必须同名，具体可参看官方目录结构。

	而在WePY中则使用了单文件模式，将原生小程序app实例的3个文件统一为app.wpy，page页面的4个文件统一为page.wpy。使用WePY开发前后的开发目录结构对比如下：


## [wepy.config.js配置文件说明](https://tencent.github.io/wepy/document.html#/?id=wepyconfigjs%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E)
