---
title: Switch
---

## Switch 开关

开关按钮，用于表示开关状态/两种状态之间的切换

Demo:

```tsx
import React, { useState } from 'react';
import { XSwitch, XWhiteSpace } from 'x-design-mobile';
export default () => {
  const [value, setValue] = useState(false);
  const [sdvalue, setSdValue] = useState(false);
  return (
    <>
      <XSwitch
        value={value}
        onClick={() => {
          setValue(!value);
        }}
      />
      <XWhiteSpace />
      <XSwitch value={false} disabled />
      <XWhiteSpace />
      <XSwitch value={true} disabled />
    </>
  );
};
```

### 代码演示

<!-- DEMO -->

### API

#### Switch Props

| 属性     | 说明         | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| value    | 打开或者关闭 | Boolean | `false` |
| disabled | 是否禁用     | Boolean | `false` |
