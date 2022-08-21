import Vue from "vue";

import vuerouter from "vue-router";

import routes from '@/router/routes'

// 声明插件
Vue.use(vuerouter)


const originalPush = vuerouter.prototype.push
vuerouter.prototype.push = function push(location, onResolve, onReject) {
console.log(location, onResolve, onReject)
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => {
    if (vuerouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}

// 默认暴露一个 路由对象
export default new vuerouter({
    mode:'history', // 没有#的模式
    routes  //注册的所以组件
})