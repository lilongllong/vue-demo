const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./view/index.vue'], resolve)
}];
export default routers;
