---
nav:
  title: 基本组件
  order: 0
hero:
  title: 基本组件
  desc: 完成Ant Desin的组件克隆，预设配置减少配置成本，拿来即用，无需配置，用法和Antd几乎一致
  actions:
    - text: Ant Desin官方组件文档
      link: https://ant.design/components/overview-cn/
# features:
#   - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
#     title: Feature 1
#     desc: Balabala
#   - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
#     title: Feature 2
#     desc: Balabala
#   - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
#     title: Feature 3
#     desc: Balabala
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---
# 基本组件

## Button 按钮
```jsx
import React from 'react';
import { Button, Space } from 'components-antd';

export default () => (
  <Space>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
```

## Icon 图标
无需安装直接引用，通过type属性控制图标类型
```jsx
import React from 'react';
import { Icon, Space, Row } from 'components-antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

export default () => (
  <>
    <h3>基础用法</h3>
    <Row>
      <Space>
        <Icon type="HomeOutlined" style={{ fontSize: 24 }} />
        <Icon type="SettingFilled" style={{ fontSize: 24 }} />
        <Icon type="SmileOutlined" style={{ fontSize: 24 }} />
        <Icon type="SyncOutlined" spin style={{ fontSize: 24 }} />
        <Icon type="SmileOutlined" rotate={180} style={{ fontSize: 24 }} />
        <Icon type="LoadingOutlined" style={{ fontSize: 24 }} />
      </Space>
    </Row>
    <h3 style={{ marginTop: 12 }}>使用iconfont字体资源</h3>
    <Row>
      <Space>
        <IconFont type="icon-javascript" style={{ fontSize: 24 }} />
        <IconFont type="icon-java" style={{ fontSize: 24 }} />
        <IconFont type="icon-shoppingcart" style={{ fontSize: 24 }} />
        <IconFont type="icon-python" style={{ fontSize: 24 }} />
      </Space>
    </Row>
  </>
)
```

## Typography 排版
```jsx
import React from 'react';
import { Typography, Divider } from 'components-antd';

export default () => (
<Typography>
    <Typography.Title>Introduction</Typography.Title>
    <Typography.Paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Typography.Paragraph>
    <Typography.Paragraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
      <Typography.Text strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development
      </Typography.Text>.
    </Typography.Paragraph>
    <Typography.Title level={2}>Guidelines and Resources</Typography.Title>
    <Typography.Paragraph>
      We supply a series of design principles, practical patterns and high quality design resources
      (<Typography.Text code>Sketch</Typography.Text> and <Typography.Text code>Axure</Typography.Text>), to help people create their product
      prototypes beautifully and efficiently.
    </Typography.Paragraph>

    <Typography.Paragraph>
      <ul>
        <li>
          <Typography.Link href="/docs/spec/proximity">Principles</Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/spec/overview">Patterns</Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/resources">Resource Download</Typography.Link>
        </li>
      </ul>
    </Typography.Paragraph>

    <Typography.Paragraph>
      Press <Typography.Text keyboard>Esc</Typography.Text> to exit...
    </Typography.Paragraph>

    <Divider />

    <Typography.Title>介绍</Typography.Title>
    <Typography.Paragraph>
      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
    </Typography.Paragraph>
    <Typography.Paragraph>
      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
      Ant Design。基于<Typography.Text mark>『确定』和『自然』</Typography.Text>
      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
      <Typography.Text strong>更好的用户体验</Typography.Text>。
    </Typography.Paragraph>
    <Typography.Title level={2}>设计资源</Typography.Title>
    <Typography.Paragraph>
      我们提供完善的设计原则、最佳实践和设计资源文件（<Typography.Text code>Sketch</Typography.Text> 和
      <Typography.Text code>Axure</Typography.Text>），来帮助业务快速设计出高质量的产品原型。
    </Typography.Paragraph>

    <Typography.Paragraph>
      <ul>
        <li>
          <Typography.Link href="/docs/spec/proximity-cn">设计原则</Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/spec/overview-cn">设计模式</Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/resources-cn">设计资源</Typography.Link>
        </li>
      </ul>
    </Typography.Paragraph>

    <Typography.Paragraph>
      <blockquote>AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。</blockquote>
      <pre>AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。</pre>
    </Typography.Paragraph>

    <Typography.Paragraph>
      按<Typography.Text keyboard>Esc</Typography.Text>键退出阅读……
    </Typography.Paragraph>
  </Typography>
)
```

## Divider 分割线
```jsx
import React from 'react';
import { Divider } from 'components-antd';

export default () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
)
```