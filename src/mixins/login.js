import wepy from "wepy"

//通用登录部分
export default class LoginMixin extends wepy.mixin {
    data={

    };
    methods={
       autoInvoke(){
           console.log("LoginMixin methods be auto invoked")
       }
    }

    //普通自定义方法在methods对象外声明，与methods平级
     /**执行登录**/
doLogin(){
        /**判断本地是否有openId**/
       var openId= wx.getStorageSync("openid");
       if(openId){
           /**检查sesseion_key 状态**/
            wx.checkSession({
                success: function(){
                    console.log('session_key 未过期，并且在本生命周期一直有效')
                },
                fail: function(){
                        console.log('session_key 已经失效，需要重新执行登录流程')
                        
                        this.doLoginRequest();
                    
                }
            })
       }else{
            this.doLoginRequest();
       }
       
}
doLoginRequest(){
    let self=this;
    wx.login({
        success: function(res) {
            if (res.code) {
                /**发起网络请求**/
                wx.request({
                    url: self.$parent.globalData.loginUrl+res.code,
                    success: function(res) {
                        if(res.data.openid){
                            wx.setStorage({'key':"openid",'data':res.data});
                        }else{
                            console.log(res.data)
                        }
                    },
                    fail:function(res){
                        console.log(res.data)
                    }
                })
            } else {
                console.log('登录失败！' + res.errMsg)
            }
        }
    });
}

    onShow() {
        console.log('LoginMixin onShow')
      }
    
      onLoad() {
        console.log('LoginMixin onLoad')
      }

}