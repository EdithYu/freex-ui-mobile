---
title: Platekeyboard
---

## 车牌号键盘

Demo:

```tsx
import React from 'react';
import { XPlateKeyboard } from 'x-design-mobile';

export default () => (
  <XPlateKeyboard onChange={(val: string) => console.log(val)} />
);
```

## API

| 属性     | 说明           | 类型                  | 默认值 | 必选 |
| -------- | -------------- | --------------------- | ------ | ---- |
| onChange | 输入改变时回调 | (val: string) => void |        | true |  |
