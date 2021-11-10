/*
 * @Author       : duxinyue
 * @Date         : 2021-04-27 11:33:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-09 22:44:17
 * @FilePath     : \app1\src\config\menu.js
 */
export const menus = [
    // 菜单相关路由
    { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Home' },
    { key: '/app/editor', title: '富文本', icon: 'mobile', component: 'Editor' },
    // {
    //     key: '/app/ui',
    //     title: '菜单',
    //     icon: 'scan',
    //     subs: [
    //         { key: '/app/ui/sub1', title: '菜单1', component: 'Menue1' },
    //         { key: '/app/ui/sub2', title: '菜单2',subs:[
    //             { key: '/app/ui/sub3', title: '菜单3', component: 'Menue3' },
    //         ] },
    //     ],
    // },
]