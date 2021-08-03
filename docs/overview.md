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
footer: Open-source MIT Licensed | Copyright © 2021<br />Powered by [dumi](https://d.umijs.org)
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

无需安装直接引用，通过 type 属性控制图标类型

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
);
```

## Typography 排版

```jsx
import React from 'react';
import { Typography, Divider } from 'components-antd';

export default () => (
  <Typography>
    <Typography.Title>Introduction</Typography.Title>
    <Typography.Paragraph>
      In the process of internal desktop applications development, many
      different design specs and implementations would be involved, which might
      cause designers and developers difficulties and duplication and reduce the
      efficiency of development.
    </Typography.Paragraph>
    <Typography.Paragraph>
      After massive project practice and summaries, Ant Design, a design
      language for background applications, is refined by Ant UED Team, which
      aims to
      <Typography.Text strong>
        uniform the user interface specs for internal background projects, lower
        the unnecessary cost of design differences and implementation and
        liberate the resources of design and front-end development
      </Typography.Text>.
    </Typography.Paragraph>
    <Typography.Title level={2}>Guidelines and Resources</Typography.Title>
    <Typography.Paragraph>
      We supply a series of design principles, practical patterns and high
      quality design resources (<Typography.Text code>Sketch</Typography.Text>{' '}
      and <Typography.Text code>Axure</Typography.Text>), to help people create
      their product prototypes beautifully and efficiently.
    </Typography.Paragraph>

    <Typography.Paragraph>
      <ul>
        <li>
          <Typography.Link href="/docs/spec/proximity">
            Principles
          </Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/spec/overview">Patterns</Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/resources">
            Resource Download
          </Typography.Link>
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
      我们提供完善的设计原则、最佳实践和设计资源文件（
      <Typography.Text code>Sketch</Typography.Text> 和
      <Typography.Text code>Axure</Typography.Text>
      ），来帮助业务快速设计出高质量的产品原型。
    </Typography.Paragraph>

    <Typography.Paragraph>
      <ul>
        <li>
          <Typography.Link href="/docs/spec/proximity-cn">
            设计原则
          </Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/spec/overview-cn">
            设计模式
          </Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/resources-cn">设计资源</Typography.Link>
        </li>
      </ul>
    </Typography.Paragraph>

    <Typography.Paragraph>
      <blockquote>
        AntV
        是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV
        经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+
        业务系统，通过了日均千万级 UV 产品的严苛考验。
        我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。
      </blockquote>
      <pre>
        AntV
        是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV
        经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+
        业务系统，通过了日均千万级 UV 产品的严苛考验。
        我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。
      </pre>
    </Typography.Paragraph>

    <Typography.Paragraph>
      按<Typography.Text keyboard>Esc</Typography.Text>键退出阅读……
    </Typography.Paragraph>
  </Typography>
);
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
);
```

## Grid 栅格

```jsx
import React from 'react';
import { Row, Col } from 'components-antd';

const style = { background : 'rgb(16, 142, 233)', lineHeight: '40px', textAlign: 'center', color: '#fff' }

export default () => (
  <Row>
    <Col style={style} span={6}>col-6</Col>
    <Col style={style} span={6}>col-6</Col>
    <Col style={style} span={6}>col-6</Col>
    <Col style={style} span={6}>col-6</Col>
  </Row>
);
```

## Layout 布局

```jsx
import React from 'react';
import { Layout } from 'components-antd';

const styles = {
  common: {
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    height: 64,
    padding: '0 50px',
    lineHeight: '64px',
    background: '#7dbcea',
    color: '#fff',
  },
  sider: {
    lineHeight: '120px',
    background: '#3ba0e9',
  },
  content: {
    minHeight: 120,
    lineHeight: '120px',
    background: 'rgba(16, 142, 233, 1)',
  },
  footer: {
    color: '#fff',
    background: '#7dbcea',
  },
};

export default () => (
  <Layout style={styles.common}>
    <Layout.Header style={styles.header}>Header</Layout.Header>
    <Layout>
      <Layout.Sider style={styles.sider}>Sider</Layout.Sider>
      <Layout.Content style={styles.content}>Content</Layout.Content>
    </Layout>
    <Layout.Footer style={styles.footer}>Footer</Layout.Footer>
  </Layout>
);
```

## Space 间距

```jsx
import React from 'react';
import { Button, Space, Upload, Popconfirm, Icon } from 'components-antd';

export default () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <Icon type="UploadOutlined" /> Click to Upload
      </Button>
    </Upload>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
);
```

## Affix 固钉

```jsx
import React, { useState } from 'react';
import { Affix, Button, Space } from 'components-antd';

export default () => {
  const [top, setTop] = useState(100);
  const [bottom, setBottom] = useState(10);

  return (
    <Space direction="vertical">
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </Space>
  );
};
```

## Breadcrumb 面包屑

```jsx
import React from 'react';
import { Breadcrumb, Icon } from 'components-antd';

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="HomeOutlined" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="UserOutlined" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
);
```

## Dropdown 下拉菜单

```jsx
import React from 'react';
import { Menu, Dropdown, Icon } from 'components-antd';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="2" icon={<Icon type="DownOutlined" />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item key="3" disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item key="4" danger>a danger item</Menu.Item>
  </Menu>
);

export default () => (
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
      Hover me <Icon type="DownOutlined" />
    </a>
  </Dropdown>
);
```

## Menu 导航菜单

```jsx
import React from 'react';
import { Menu, Icon } from 'components-antd';

export default () => (
  <Menu
    onClick={console.log}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
    <Menu.SubMenu key="sub1" icon={<Icon type="MailOutlined" />} title="Navigation One">
      <Menu.ItemGroup key="g1" title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="g2" title="Item 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
    <Menu.SubMenu key="sub2" icon={<Icon type="AppstoreOutlined" />} title="Navigation Two">
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <Menu.SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
    <Menu.SubMenu key="sub4" icon={<Icon type="SettingOutlined" />} title="Navigation Three">
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
```

## PageHeader 页头

```jsx
import React from 'react';
import { PageHeader } from 'components-antd';

export default () => (
  <PageHeader
    style={{ border: '1px solid rgb(235, 237, 240)' }}
    onBack={console.log}
    title="Title"
    subTitle="This is a subtitle"
  />
);
```

## Pagination 分页

```jsx
import React from 'react';
import { Pagination, ConfigProvider } from 'components-antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default () => (
  <ConfigProvider locale={zhCN}>
    <Pagination
      total={85}
      showSizeChanger
      showQuickJumper
      showTotal={total => `总 ${total} 条`}
    />
  </ConfigProvider>
);
```

## Steps 步骤条

```jsx
import React from 'react';
import { Steps } from 'components-antd';

export default () => (
  <Steps current={1}>
    <Steps.Step title="Finished" description="This is a description." />
    <Steps.Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Steps.Step title="Waiting" description="This is a description." />
  </Steps>
);
```

## AutoComplete 自动完成

```jsx
import React, { useState } from 'react';
import { AutoComplete } from 'components-antd';

export default () => {
  const [result, setResult] = useState([]);

  const handleSearch = value => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    setResult(res);
  };

  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
    >
      {result.map((email) => (
        <AutoComplete.Option key={email} value={email}>
          {email}
        </AutoComplete.Option>
      ))}
    </AutoComplete>
  )
};
```

## Cascader 级联选择

```jsx
import React from 'react';
import { Cascader } from 'components-antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default () => (
  <Cascader options={options} onChange={console.log} placeholder="Please select" />
);
```

## Checkbox 多选框

```jsx
import React from 'react';
import { Checkbox, Space } from 'components-antd';

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default () => (
  <Space direction="vertical">
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={console.log} />
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={console.log} />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={console.log}
    />
  </Space>
);
```

## DatePicker 日期选择框

```jsx
import React from 'react';
import { DatePicker, Space, ConfigProvider } from 'components-antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default () => (
  <ConfigProvider locale={zhCN}>
    <Space direction="vertical">
      <DatePicker onChange={console.log} />
      <DatePicker onChange={console.log} picker="week" />
      <DatePicker onChange={console.log} picker="month" />
      <DatePicker onChange={console.log} picker="quarter" />
      <DatePicker onChange={console.log} picker="year" />
      <DatePicker.RangePicker />
      <DatePicker.RangePicker showTime />
      <DatePicker.RangePicker picker="week" />
      <DatePicker.RangePicker picker="month" />
      <DatePicker.RangePicker picker="year" />
    </Space>
  </ConfigProvider>
);
```

```jsx
import React from 'react';
import { Form, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Rate, Checkbox, Row, Col, Icon } from 'components-antd';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) return e;
  return e && e.fileList;
};

export default () => (
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={console.log}
    initialValues={{
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
    }}
  >
    <Form.Item label="Plain Text">
      <span className="ant-form-text">China</span>
    </Form.Item>
    <Form.Item
      name="select"
      label="Select"
      hasFeedback
      rules={[{ required: true, message: 'Please select your country!' }]}
    >
      <Select placeholder="Please select a country">
        <Select.Option value="china">China</Select.Option>
        <Select.Option value="usa">U.S.A</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item
      name="select-multiple"
      label="Select[multiple]"
      rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
    >
      <Select mode="multiple" placeholder="Please select favourite colors">
        <Select.Option value="red">Red</Select.Option>
        <Select.Option value="green">Green</Select.Option>
        <Select.Option value="blue">Blue</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item label="InputNumber">
      <Form.Item name="input-number" noStyle>
        <InputNumber min={1} max={10} />
      </Form.Item>
      <span className="ant-form-text"> machines</span>
    </Form.Item>

    <Form.Item name="switch" label="Switch" valuePropName="checked">
      <Switch />
    </Form.Item>

    <Form.Item name="slider" label="Slider">
      <Slider
        marks={{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }}
      />
    </Form.Item>

    <Form.Item name="radio-group" label="Radio.Group">
      <Radio.Group>
        <Radio value="a">item 1</Radio>
        <Radio value="b">item 2</Radio>
        <Radio value="c">item 3</Radio>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="radio-button"
      label="Radio.Button"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value="a">item 1</Radio.Button>
        <Radio.Button value="b">item 2</Radio.Button>
        <Radio.Button value="c">item 3</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item name="checkbox-group" label="Checkbox.Group">
      <Checkbox.Group>
        <Row>
          <Col span={8}>
            <Checkbox value="A" style={{ lineHeight: '32px' }}>
              A
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
              B
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C" style={{ lineHeight: '32px' }}>
              C
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D" style={{ lineHeight: '32px' }}>
              D
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E" style={{ lineHeight: '32px' }}>
              E
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="F" style={{ lineHeight: '32px' }}>
              F
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>

    <Form.Item name="rate" label="Rate">
      <Rate />
    </Form.Item>

    <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra="longgggggggggggggggggggggggggggggggggg"
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<Icon type="UploadOutlined" />}>Click to upload</Button>
      </Upload>
    </Form.Item>

    <Form.Item label="Dragger">
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <Icon type="InboxOutlined" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>

    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
```

## DatePicker 日期选择框

```jsx
import React from 'react';
import { Input, Space, Icon } from 'components-antd';

const suffix = (
  <Icon type="AudioOutlined"
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

export default () => (
  <Space direction="vertical">
    <Input placeholder="default size" prefix={<Icon type="UserOutlined" />} />
    <Input.Search placeholder="input search text" onSearch={console.log} style={{ width: 200 }} />
    <Input.Search placeholder="input search text" allowClear onSearch={console.log} style={{ width: 200 }} />
    <Input.Search placeholder="input search text" onSearch={console.log} enterButton />
    <Input.Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={console.log}
    />
    <Input.Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={console.log}
    />
  </Space>
);
```

## InputNumber 数字输入框

```jsx
import React from 'react';
import { InputNumber, Space } from 'components-antd';

export default () => (
  <Space>
    <InputNumber min={1} max={10} defaultValue={3} onChange={console.log} />
    <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={console.log}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      onChange={console.log}
    />
  </Space>
);
```

## Mentions 提及

```jsx
import React from 'react';
import { Mentions } from 'components-antd';

export default () => (
  <Mentions
    style={{ width: '100%' }}
    onChange={console.log}
    onSelect={console.log}
    defaultValue="@afc163"
  >
    <Mentions.Option value="afc163">afc163</Mentions.Option>
    <Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
    <Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
  </Mentions>
);
```

## Radio 单选框

```jsx
import React from 'react';
import { Radio } from 'components-antd';

export default () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
);
```

## Rate 评分

```jsx
import React from 'react';
import { Rate, Space, Icon } from 'components-antd';

export default () => (
  <Space direction="vertical">
    <Rate />
    <Rate allowHalf defaultValue={2.5} />
    <Rate defaultValue={2} character={({ index }) => index + 1} />
    <Rate character={<Icon type="HeartOutlined" />} allowHalf />
  </Space>
);
```

## Select 选择器

```jsx
import React from 'react';
import { Select, Space } from 'components-antd';

export default () => (
  <Space>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={console.log}>
      <Select.Option value="jack">Jack</Select.Option>
      <Select.Option value="lucy">Lucy</Select.Option>
      <Select.Option value="disabled" disabled>
        Disabled
      </Select.Option>
      <Select.Option value="Yiminghe">yiminghe</Select.Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Select.Option value="lucy">Lucy</Select.Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Select.Option value="lucy">Lucy</Select.Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
      <Select.Option value="lucy">Lucy</Select.Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={console.log}>
      <Select.OptGroup label="Manager">
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select.OptGroup>
      <Select.OptGroup label="Engineer">
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select.OptGroup>
    </Select>
  </Space>
);
```

## Slider 滑动输入条

```jsx
import React from 'react';
import { Slider, Space } from 'components-antd';

export default () => (
  <>
    基本：
    <Slider defaultValue={30} />
    双滑块：
    <Slider range defaultValue={[20, 50]} />
    范围可拖拽：
    <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
  </>
);
```

## Switch 开关

```jsx
import React from 'react';
import { Switch, Space, Icon } from 'components-antd';

export default () => (
  <Space>
    <Switch defaultChecked onChange={console.log} />
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <Switch
      checkedChildren={<Icon type="CheckOutlined" />}
      unCheckedChildren={<Icon type="CloseOutlined" />}
      defaultChecked
    />
  </Space>
);
```

## TimePicker 时间选择框

```jsx
import React from 'react';
import moment from 'moment';
import { TimePicker } from 'components-antd';

export default () => (
  <TimePicker onChange={console.log} defaultValue={moment('00:00:00', 'HH:mm:ss')} />
);
```

## Transfer 穿梭框

```jsx
import React, { useState } from 'react';
import { Transfer } from 'components-antd';

const mockData = [];

for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);

export default () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={console.log}
      onSelectChange={console.log}
      onScroll={console.log}
      render={item => item.title}
    />
  )
};
```

## TreeSelect 树选择

```jsx
import React, { useState } from 'react';
import { TreeSelect } from 'components-antd';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

export default () => {
  const [value, setValue] = useState([]);

  return (
    <TreeSelect
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      treeData={treeData}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={setValue}
    />
  )
};
```

## Upload 上传

```jsx
import React from 'react';
import { Upload, message, Button, Icon } from 'components-antd';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default () => (
  <Upload {...props}>
    <Button icon={<Icon type="UploadOutlined" />}>Click to Upload</Button>
  </Upload>
);
```

## Avatar 头像

```jsx
import React from 'react';
import { Avatar, Image, Icon, Space } from 'components-antd';

export default () => (
  <Space>
    <Avatar icon={<Icon type="UserOutlined" />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar
      src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<Icon type="UserOutlined" />} />
  </Space>
);
```

## Badge 徽标数

```jsx
import React from 'react';
import { Badge, Icon, Space } from 'components-antd';

const style = {
  width: 42, 
  height: 42, 
  display: 'block', 
  background: '#eee'
}

export default () => (
  <Space size={24}>
    <Badge count={5}>
      <a href="#" style={style} />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" style={style} />
    </Badge>
    <Badge count={<Icon type="ClockCircleOutlined" style={{ color: '#f5222d' }} />}>
      <a href="#" style={style} />
    </Badge>
  </Space>
);
```

## Calendar 日历

```jsx
import React from 'react';
import { Calendar } from 'components-antd';

const handleChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
}

export default () => (
  <Calendar onPanelChange={handleChange} />
);
```

## Card 卡片

```jsx
import React from 'react';
import { Card } from 'components-antd';

export default () => (
  <>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <br />
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Card.Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </>
);
```

## Carousel 走马灯

```jsx
import React from 'react';
import { Carousel } from 'components-antd';

const style = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default () => (
  <Carousel autoplay>
    <div>
      <h3 style={style}>1</h3>
    </div>
    <div>
      <h3 style={style}>2</h3>
    </div>
    <div>
      <h3 style={style}>3</h3>
    </div>
    <div>
      <h3 style={style}>4</h3>
    </div>
  </Carousel>
);
```

## Collapse 折叠面板

```jsx
import React from 'react';
import { Collapse } from 'components-antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default () => (
  <Collapse defaultActiveKey={['1']} onChange={console.log}>
    <Collapse.Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Collapse.Panel>
    <Collapse.Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Collapse.Panel>
    <Collapse.Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Collapse.Panel>
  </Collapse>
);
```

## Comment 评论

```jsx
import React from 'react';
import { Comment, Avatar } from 'components-antd';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

export default () => (
  <ExampleComment>
    <ExampleComment>
      <ExampleComment />
      <ExampleComment />
    </ExampleComment>
  </ExampleComment>
);
```

## Descriptions 描述列表

```jsx
import React from 'react';
import { Descriptions, Badge } from 'components-antd';

export default () => (
  <Descriptions title="User Info" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </Descriptions.Item>
  </Descriptions>
);
```

## Empty 空状态

```jsx
import React from 'react';
import { Empty, Button, Divider } from 'components-antd';

export default () => (
  <>
    <Empty />
    <Divider />
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    <Divider />
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={
        <span>
          Customize <a href="#API">Description</a>
        </span>
      }
    >
      <Button type="primary">Create Now</Button>
    </Empty>
  </>
);
```

## Image 图片

```jsx
import React from 'react';
import { Image, Space } from 'components-antd';

export default () => (
  <Image.PreviewGroup>
    <Space size={12}>
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </Space>
  </Image.PreviewGroup>
);
```

## List 列表

```jsx
import React from 'react';
import { List, Avatar } from 'components-antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);
```

## Popover 气泡卡片

```jsx
import React from 'react';
import { Popover, Button } from 'components-antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default () => (
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
);
```

## Statistic 统计数值

```jsx
import React from 'react';
import { Statistic, Row, Col, Button } from 'components-antd';

export default () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>
);
```

## Table 表格

```jsx
import React from 'react';
import { Table, Space, Tag } from 'components-antd';

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {
          tags.map(tag => (
              <Tag color={tag.length > 5 ? 'geekblue' : tag === 'loser' ? 'volcano' : 'green'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          )
        }
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export default () => (
  <Table columns={columns} dataSource={dataSource} />
);
```

## Tabs 标签页

```jsx
import React from 'react';
import { Tabs } from 'components-antd';

export default () => (
  <Tabs defaultActiveKey="1" onChange={console.log}>
    <Tabs.TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </Tabs.TabPane>
  </Tabs>
);
```

## Tag 标签

```jsx
import React from 'react';
import { Tag } from 'components-antd';

export default () => (
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <Tag closable onClose={console.log}>
      Tag 2
    </Tag>
    <Tag closable onClose={e => e.preventDefault()}>
      Prevent Default
    </Tag>
  </>
);
```

## Timeline 时间轴

```jsx
import React from 'react';
import { Timeline } from 'components-antd';

export default () => (
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);
```

## Tooltip 文字提示

```jsx
import React from 'react';
import { Tooltip } from 'components-antd';

export default () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);
```

## Tree 树形控件

```jsx
import React from 'react';
import { Tree } from 'components-antd';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1890ff',
                }}
              >
                sss
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

export default () => (
  <Tree
    checkable
    defaultExpandedKeys={['0-0-0', '0-0-1']}
    defaultSelectedKeys={['0-0-0', '0-0-1']}
    defaultCheckedKeys={['0-0-0', '0-0-1']}
    onSelect={console.log}
    onCheck={console.log}
    treeData={treeData}
  />
);
```

## Alert 警告提示

```jsx
import React from 'react';
import { Alert, Space } from 'components-antd';

export default () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </Space>
);
```

## Drawer 抽屉

```jsx
import React, { useState } from 'react';
import { Drawer, Button } from 'components-antd';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
};
```

## Message 全局提示

```jsx
import React from 'react';
import { message, Button, Space } from 'components-antd';

const info = () => {
  message.info('This is a normal message');
};

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

export default () => (
  <Space>
    <Button onClick={info}>Normal</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
);
```