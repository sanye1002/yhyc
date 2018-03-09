const routers = [
    {
        path: '/',
        title: '',
        redirect: '/login',
        component: (resolve) => require(['./views/index.vue'], resolve)

    },
    {
        path: '/yhyc/home',
        name: 'home',
        title: '',
        component: (resolve) => require(['./components/menu/menu.vue'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: (resolve) => require(['./views/login/login.vue'], resolve)
    },
    {
        path: '/index',
        name: 'index',
        title: '首页',
        component: (resolve) => require(['./views/home/index.vue'], resolve)
    }


];
export default routers;