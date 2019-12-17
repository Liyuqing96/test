// import app from '../../app.vue'
// const app = require('../../app.vue')
// const home = require('../pages/home/home.vue')
// const login = r => require.ensure([], () => r(require('../pages/login/login.vue')), 'login')

// export default [{
//     path: '/',
//     component: app, //顶层路由，对应index.html
//     children: [ //二级路由。对应App.vue
//         //地址为空时跳转home页面
//         {
//             path: '',
//             redirect: '/home'
//         },
//         //首页城市列表页
//         {
//             path: '/home',
//             name: 'home',
//             component: home
//         },
//         //登录注册页
//         {
//             path: '/login',
//             name: 'login',
//             component: login
//         },
//     ]
// }]

export default [
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: (resolve) => require(['@/pages/home/home'], resolve)
        },
        //登录注册页
        {
            path: '/login',
            component: (resolve) => require(['@/pages/login/login'], resolve)
        }
 ];
