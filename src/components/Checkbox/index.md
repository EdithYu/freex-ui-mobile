---
title: Checkbox
---

## 勾选框

Demo:

```tsx
import React, { useState } from 'react';
import { XCheckbox, XWhiteSpace } from 'x-design-mobile';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <XCheckbox>普通</XCheckbox>
      <XWhiteSpace />
      <XCheckbox defaultChecked>默认勾选</XCheckbox>
      <XWhiteSpace />
      <XCheckbox
        onChange={e => {
          setChecked(e.target.checked);
        }}
        checked={checked}
      >
        受控使用
      </XCheckbox>
      <XWhiteSpace />
      <XCheckbox disabled>禁选</XCheckbox>
      <XWhiteSpace />
      <XCheckbox.Group
        list={[
          {
            title: '1',
            value: 1,
          },
          {
            title: '2',
            value: 2,
          },
          {
            title: '3',
            value: 3,
          },
        ]}
        defaultActiveKey={1}
        multiple
        onChange={val => console.log(val)}
      />
    </>
  );
};
```

## API

### XCheckbox

| 属性           | 说明                   | 类型                          | 默认值 | 必选  |
| -------------- | ---------------------- | ----------------------------- | ------ | ----- |
| className      | 样式类名               | string                        |        | false |
| disabled       | 是否禁用               | boolean                       | false  | false |
| checked        | 当前是否选中           | boolean                       | -      | false |
| defaultChecked | 初始是否选中           | boolean                       | -      | false |
| onChange       | 值变化时触发的回调函数 | (event?: ChangeEvent) => void | -      | false |

### XCheckbox.Group

| 属性             | 说明                   | 类型                  | 默认值 | 必选  |
| ---------------- | ---------------------- | --------------------- | ------ | ----- |
| className        | 样式类名               | string                |        | false |
| multiple         | 是否多选               | boolean               | false  | false |
| list             | 数据源                 | Models.ListData[]     | -      | true  |
| activeKey        | 选中的值               | number/string         | -      | false |
| defaultActiveKey | 默认选中的值           | number/string         | -      | false |
| onChange         | 值变化时触发的回调函数 | (val: string) => void | -      | false |
