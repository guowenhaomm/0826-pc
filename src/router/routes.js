import Home from '@/pages/Home'

import Login from '../pages/Login'

import Register from '../pages/Register'

import Search from '../pages/Search'

// 暴露我的所以组件
export default [
    {
        path:'/',
        component:Home
    },
    {
        name:'searchs',
        path:'/search/:wokeyd',
        component:Search,
        props:true
    },
    {
        path:'/login',
        component:Login,
        meta:{
            iftrue:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            iftrue:true
        }
    }
]