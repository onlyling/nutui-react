# Divider 分割线

## 介绍

用于将内容分隔为多个区域。

## 安装

```tsx
import { Divider } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider />
    </>
  );
};
export default App;
```

:::

### 展示文本

通过插槽在可以分割线中间插入内容。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider>文本</Divider>
    </>
  );
};
export default App;
```

:::

### 内容位置

通过 contentPosition 指定内容所在位置。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider contentPosition="left">文本</Divider>
      <Divider contentPosition="right">文本</Divider>
    </>
  );
};
export default App;
```

:::

### 虚线

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider style={{ borderStyle: 'dashed'}}>文本</Divider>
    </>
  );
};
export default App;
```

:::

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', borderStyle: 'dashed' }}>文本</Divider>
    </>
  );
};
export default App;
```

:::

### 垂直分割线

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <div>
          文本
          <Divider direction="vertical" />
          <a href="#" style={{ color: '#1989fa' }}>链接</a>
          <Divider direction="vertical" />
          <a href="#" style={{ color: '#1989fa' }}>链接</a>
      </div>
    </>
  );
};
export default App;
```

:::

## Divider

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentPosition | 内容位置 | `left` \| `center` \| `right` | `center` |
| direction | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-divider-margin | 分割线整体内容的margin值 | `16px 0` |
| \--nutui-divider-border-color | 分割线的边框色值 | `$color-border` |
| \--nutui-divider-text-font-size | 分割线整体内容的font-size大小 | `$font-size-base` |
| \--nutui-divider-text-color | 分割线整体内容的颜色 | `$color-title` |
| \--nutui-divider-line-height | 分割线的行高 | `2px` |
| \--nutui-divider-spacing | 左边分割线与文案的间隔值 | `8px` |
| \--nutui-divider-vertical-height | 垂直分割线的高度 | `12px` |
| \--nutui-divider-vertical-top | 垂直分割线的top值 | `2px` |
| \--nutui-divider-vertical-margin | 垂直分割线的margin值 | `0 8px` |