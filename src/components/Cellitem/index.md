---
title: Cellitem
---

## 列表单元

Demo:

```tsx
import React, { useState } from 'react';
import { XField, XWhiteSpace, XCellItem, XSwitch } from 'x-design-mobile';

export default () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <XField>
        <XCellItem title="动作条目" brief="展示摘要描述" />
        <XCellItem
          title="动作条目"
          brief="展示摘要描述"
          addon="最多描述6个字"
        />
        <XCellItem
          title={'动作条目'}
          arrow
          addon="最多描述6个字"
          onClick={() => {
            alert('点击事件');
          }}
        />
        <XCellItem title={'动作条目'} arrow noBorder />
        <XCellItem title={'动作条目'} disabled />
        <XCellItem
          title={'动作条目'}
          leftSlot={
            <div
              style={{
                display: 'block',
                width: '24px',
                height: '24px',
                backgroundColor: '#e6e6e6',
              }}
            ></div>
          }
        />
        <XCellItem
          title={'动作条目'}
          rightSlot={
            <XSwitch
              value={value}
              onClick={() => {
                setValue(!value);
              }}
            />
          }
        />
      </XField>
    </>
  );
};
```

## API

#### CellItem Props

| 属性      | 说明         | 类型      | 默认值  | 备注 |
| --------- | ------------ | --------- | ------- | ---- |
| title     | 标题         | String    | -       | -    |
| brief     | 描述文案     | String    | -       | -    |
| addon     | 附加文案     | String    | -       | -    |
| disabled  | 是否禁用项目 | Boolean   | `false` | -    |
| arrow     | 动作箭头标识 | Boolean   | `false` | -    |
| noBorder  | 去除边框     | Boolean   | `false` | -    |
| rightSlot | 右侧插槽     | ReactNode |         | -    |
| leftSlot  | 左侧插槽     | ReactNode |         | -    |
| onCLick   | 点击事件     | Function  |         | -    |
