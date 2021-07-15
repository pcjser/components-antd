---
title: AutoComplete 自动完成
order: 15
nav:
  title: AutoComplete 自动完成
  path: /components
---

## AutoComplete 自动完成

Demo:

```jsx
import React, { useState } from 'react';
import { AutoComplete } from 'components-antd';

const Complete = () => {
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(
        (domain) => `${value}@${domain}`,
      );
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
  );
};

export default () => <Complete />;
```
