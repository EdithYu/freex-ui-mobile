---
title: Tag
---

## Tag 标签

Demo:

```tsx
import React, { useState } from 'react';
import { XTag, XWhiteSpace } from 'x-design-mobile';
export default () => {
  return (
    <>
      <XTag
        text="人工签认"
        fillColor="rgba(29, 157, 255, 0.17)"
        fontColor="#1D9DFF"
      ></XTag>
      <XWhiteSpace />
      <XTag
        text="停工中"
        fillColor="rgba(255, 125, 66, 0.17)"
        fontColor="#FF7D42"
      ></XTag>
      <XWhiteSpace />
      <XTag
        text="已过期"
        fillColor="rgba(36, 69, 103, 0.18)"
        fontColor="#244567"
      ></XTag>
      <XWhiteSpace />
      <XTag text="人工签认" type="ghost" fontColor="#1D9DFF"></XTag>
      <XWhiteSpace />
      <XTag
        shape="bubble"
        text="99"
        fillColor="linear-gradient(45deg, #FF525B 0%, #FF7D42 100%)"
        fontColor="#fff"
      />
      <XWhiteSpace />
      <XTag shape="coupon" text="补" fillColor="#1D9DFF" fontColor="#fff" />
      <XWhiteSpace />
      <XTag shape="round" text="999+">
        <span style={{ paddingRight: 10 }}>邀请有奖</span>
      </XTag>
      <XWhiteSpace />
      <XTag shape="dot"></XTag>
      <XWhiteSpace />
      <XTag shape="dot">
        <span style={{ paddingRight: 10 }}>邀请有奖</span>
      </XTag>
    </>
  );
};
```

<!-- DEMO -->

### API

#### Tag Props

| 属性      | 说明                                                   | 类型   | 默认值  |
| --------- | ------------------------------------------------------ | ------ | ------- |
| type      | 标签样式,可选值为 fill(填充),ghost(线框)               | string | `fill`  |
| fillColor | 标签颜色                                               | string |         |
| fontColor | 字体颜色                                               | string |         |
| shape     | 标签形状，可选值为(dot, radius, bubble, coupon, round) | string | default |
