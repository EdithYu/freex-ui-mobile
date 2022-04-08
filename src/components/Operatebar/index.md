---
title: Operatebar
---

## 操作栏

Demo:

```tsx
import React from 'react';
import { XOperateBar, XButton, XWhiteSpace } from 'x-design-mobile';

export default () => {
  return (
    <div style={{ paddingBottom: '0.7rem' }}>
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <XOperateBar
        type={'primary'}
        onClick={() => {
          alert('点击事件');
        }}
      >
        <XButton>主要按钮</XButton>
      </XOperateBar>
    </div>
  );
};
```

## 操作栏双按钮

```tsx
import React from 'react';
import { XOperateBar, XButton, XWhiteSpace } from 'x-design-mobile';

export default () => {
  return (
    <div style={{ paddingBottom: '0.7rem' }}>
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <XOperateBar
        type={'primary'}
        onClick={() => {
          alert('点击事件');
        }}
      >
        <XButton
          type={'ghost'}
          style={{ width: '100%', marginRight: '0.12rem' }}
        >
          删除
        </XButton>
        <XButton style={{ width: '100%' }}>完成</XButton>
      </XOperateBar>
    </div>
  );
};
```

## 操作栏禁止双按钮

Demo:

```tsx
import React from 'react';
import { XOperateBar, XButton, XWhiteSpace } from 'x-design-mobile';

export default () => {
  return (
    <div style={{ paddingBottom: '0.7rem' }}>
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <XOperateBar
        type={'primary'}
        onClick={() => {
          alert('点击事件');
        }}
      >
        <XButton
          type={'ghost'}
          style={{ width: '100%', marginRight: '0.12rem' }}
          disabled
        >
          删除
        </XButton>
        <XButton style={{ width: '100%' }} disabled>
          完成
        </XButton>
      </XOperateBar>
    </div>
  );
};
```

## 多选页面底部操作栏

Demo:

```tsx
import React from 'react';
import { XOperateBar, XButton, XWhiteSpace, XIcon } from 'x-design-mobile';

export default () => {
  return (
    <div style={{ paddingBottom: '0.7rem' }}>
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <div>全局按钮</div>
      <XWhiteSpace />
      <XOperateBar
        type={'primary'}
        style={{
          background: '#FFFFFF',
        }}
        onClick={() => {
          alert('点击事件');
        }}
      >
        <div
          style={{
            width: '100%',
            marginRight: '0.12rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span
            style={{
              color: '#1d9dff',
              fill: 'currentColor',
            }}
          >
            已选择: 0个
            <XIcon type="up" />
          </span>
          <span
            style={{
              color: '#9e9e9e',
            }}
          >
            提示文字
          </span>
        </div>
        <XButton style={{ width: '100%' }}>完成</XButton>
      </XOperateBar>
    </div>
  );
};
```

## API

| 属性      | 说明             | 类型                | 默认值        | 必选  |
| --------- | ---------------- | ------------------- | ------------- | ----- |
| prefixCls | 样式前缀         | string              | x-operate-bar | false |
| className | 样式类名         | string              |               | false |
| style     | 自定义外部 style | React.CSSProperties |               | false |
