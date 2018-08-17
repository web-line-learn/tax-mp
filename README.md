# 小程序项目说明
- 这是一个小程序项目, 使用wepy作为小程序组件化开发框架
- 项目名称:weixin-mp; 小程序appid: 

# 项目创建与使用
	全局安装 npm install wepy-cli -g
	安装依赖  npm  install
	开启实时编译 wepy build --watch
   
- [下载小程序开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
	导入dist目录查看效果,appid使用小程序测试号
- 开发者工具->设置->项目设置  只勾选"不校验合法域名、...",其他全部不勾选
- [代码高亮设置](https://tencent.github.io/wepy/document.html#/?id=%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE) 参考VS Code设置部分
- 推荐插件 搜索关键词 wepy,全部安装 

# wepy参考文档
- [wepy github](https://github.com/Tencent/wepy)
- [官方文档] (https://tencent.github.io/wepy/document.html#/)

# 常用wepy api 记录
- 在Page页面实例中，可以通过this.$parent来访问App实例
- 组件使用,通信与交互[文档参考](https://tencent.github.io/wepy/document.html#/?id=%E7%BB%84%E4%BB%B6)
- 数据绑定方式调整 [数据绑定](https://tencent.github.io/wepy/document.html#/?id=%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A)
- 使用WePY提供的全局拦截器对原生API的请求进行拦截 [interceptor 拦截器](https://tencent.github.io/wepy/document.html#/?id=interceptor-%E6%8B%A6%E6%88%AA%E5%99%A8)
- 其他开发模式转换 [开发模式转换](https://tencent.github.io/wepy/document.html#/?id=%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F%E8%BD%AC%E6%8D%A2)

## 通用组件放在mixins 下面
- src\mixins\login.js 通用登录功能
    
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

## pages目录结构定义
	 一人一个目录开发避免冲突,通用样式等页面修改群交流及时pull和push,或者主负责人负责

		login 登录 (2个设计页面)
		bill 账单 (1个设计页面)
		store 店铺 (5个设计页面)
		demand 需求 (6个设计页面)
		user  个人设置 (12个设计页面)
		refund 需求退款(11个设计页面) 


## [wepy.config.js配置文件说明](https://tencent.github.io/wepy/document.html#/?id=wepyconfigjs%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E)
