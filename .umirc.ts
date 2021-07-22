/*
 * @Description: 
 * @Autor: PanCheng
 * @Date: 2021-07-22 14:16:34
 * @LastEditors: PanCheng
 * @LastEditTime: 2021-07-22 15:19:44
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Components Antd',
  favicon:
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: process.env.NODE_ENV === 'production' ? '/components-antd/' : '/',
  base: '/components-antd/',
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '设计',
      path: '/design',
    },
    {
      title: '基本组件',
      path: '/overview',
    },
    {
      title: '扩展组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/pcjser/components-antd',
    },
    // {
    //   title: '我有二级导航',
    //   path: '链接是可选的',
    //   // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
    //   children: [
    //     { title: '第一项', path: 'https://d.umijs.org' },
    //     { title: '第二项', path: '/guide' },
    //   ],
    // },
  ],
  menus: {
    '/components': [
      {
        title: '数据',
        // path: '/components',
        children: [
          'Foo/index.md',// 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'Bar/index.md',// 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          // 'Typography/index.md',// 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
      {
        title: '菜单',
        //   // path: '菜单路由（可选）',
        children: [
          //     // 菜单子项（可选）
          'Demo/index.md',// 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          //     'Foo/index.md',// 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          //     'Demo/index.md',// 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
    ]
  }
  // more config: https://d.umijs.org/config
});
