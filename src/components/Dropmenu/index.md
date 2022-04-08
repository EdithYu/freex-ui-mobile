---
title: Dropmenu
---

## 按钮

Demo:

```tsx
import React from 'react';
import { XDropMenu, XWhiteSpace } from 'x-design-mobile';

export default () => {
  const data = [
    {
      text: '排量',
      options: [
        {
          value: '0',
          text: '1.6L',
        },
        {
          value: '1',
          text: '1.8L',
        },
        {
          value: '2',
          text: '2.0L',
        },
        {
          value: '3',
          text: '1.2T',
        },
        {
          value: '4',
          text: '1.4T',
        },
        {
          value: '5',
          text: '1.6T',
        },
      ],
    },
    {
      text: '变速箱',
      options: [
        {
          value: '7',
          text: '手动挡',
        },
        {
          value: '8',
          text: '自动挡',
        },
        {
          value: '9',
          text: '手自一体',
          disabled: true,
        },
      ],
    },
  ];
  return (
    <>
      <XDropMenu data={data} defaultValue={['0', '7']}></XDropMenu>
      <XWhiteSpace />
    </>
  );
};
```

## API

| 属性         | 说明         | 类型          | 默认值                                      | 必选  |
| ------------ | ------------ | ------------- | ------------------------------------------- | ----- |
| prefixCls    | 样式前缀     | string        | x-drop-menu                                 | false |
| className    | 样式类名     | string        |                                             | false |
| data         | 数据源       | array         |                                             | true  |
| defaultValue | 默认值       | array<string> | []                                          | false |
| disabled     | 禁用         | boolean       | false                                       | false |
| rowNode      | 自定义选择项 | function      | ({text: '',value:''}) => React.ReactElement | false |
| onChange     | 点击回调     | function      | ({text: '',value:''}) => void               | false |
