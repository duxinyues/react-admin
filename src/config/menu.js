/*
 * @Author       : duxinyue
 * @Date         : 2021-04-27 11:33:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-02 16:02:17
 * @FilePath: \app1\src\config\menu.js
 */
export const menus = [
    // 菜单相关路由
    { key: '/app/dashboard/index', title: '首页',  component: 'Home' },
    { key: '/app/editor', title: '富文本',  component: 'Editor' },
    { key: '/app/form', title: '表单处理',  component: 'FormPost' },
    {
        key: '#',
        title: '菜单',
        subs: [
            {
                key: '/app/ui',
                title: '菜单1',
                component: 'Menue1',
            }
        ]
    },

]