export const routes=[
    // {
    //     name:"",
    //     path:"/",
    //     redirect:"/main",
    // },
    {
        name:'main',
        path:'/main',
        component:() => import('../components/main.vue')
    }
]