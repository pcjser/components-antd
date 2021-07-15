---
title: Steps 步骤条
order: 14
nav:
  title: Steps 步骤条
  path: /components
---

## Steps 步骤条

Demo:

```jsx
import React from 'react';
import { Steps } from 'components-antd';

export default () => (
  <Steps current={1}>
    <Steps.Step title="Finished" description="This is a description." />
    <Steps.Step
      title="In Progress"
      subTitle="Left 00:00:08"
      description="This is a description."
    />
    <Steps.Step title="Waiting" description="This is a description." />
  </Steps>
);
```
