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
    // {
    //   title: '设计',
    //   path: '/design',
    // },
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
    }
  ],
  menus: {
    '/components': [
      {
        title: '数据',
        children: [
          'Foo/index.md',
          'Bar/index.md',
        ],
      },
      {
        title: '菜单',
        children: [
          'Demo/index.md',
        ],
      },
    ]
  }
  // more config: https://d.umijs.org/config
});
