# Rate 评分

## 介绍

用于快速的评级操作，或对评价进行展示。

## 安装

```tsx
import { Rate } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate defaultValue={3} />
  );
};  
export default App;

```

:::

### 受控方式

:::demo

```tsx
import React, { useState } from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const [state, setState] = useState(2);
  return (
    <Rate value={score} onChange={(value) => setScore(value)} />
  );
};  
export default App;
```

:::

### 半星

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate allowHalf defaultValue={3.5} />
  );
};  
export default App;

```

:::

### 自定义 icon

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill } from '@nutui/icons-react';

const App = () => {
  return ( 
    <Rate
      checkedIcon={<HeartFill />}
      defaultValue={3}
    />
  );
};  
export default App;

```

:::

### 自定义数量

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate count={6} defaultValue={3} />
  );
};  
export default App;

```

:::

### 最少选中数量（支持半星）

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate count={5} defaultValue={2} min={3} />
  );
};  
export default App;

```

:::

### 自定义颜色

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill } from '@nutui/icons-react';

const App = () => {
  return (
    <Rate
      defaultValue={3}
      checkedIcon={<HeartFill color="rgb(255, 200, 0)" />}
    />
  );
};  
export default App;

```

:::

### 禁用状态

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Rate disabled defaultValue={3} />
    </>
  );
};  
export default App;

```

:::

### 只读状态

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate defaultValue={3} readOnly />
  );
};  
export default App;

```

:::

### 绑定事件

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val: any) => {
    console.log(val)
  }
  return ( 
    <>   
    <Rate defaultValue={3} onChange={onChange} />
    </>
  );
};  
export default App;

```

### 滑动选择

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
      <Rate defaultValue={3} allowHalf touchable />
    </>
  );
};  
export default App;

```

### 滑动事件

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const handleTouchEnd = (event, val) => {
    console.log(event, val)
  }
  return ( 
    <>   
      <Rate defaultValue={3} touchable onTouchEnd={handleTouchEnd}/>
    </>
  );
};  
export default App;

```

## Rate

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 非受控的 star 默认值 | `number` | `0` |
| value | 受控的 star 数值 | `number` | `0` |
| count | star 总数 | `number` | `5` |
| min | 最少选中star数量 | `number` | `0` |
| uncheckedIcon | 使用图标(未选中) | `ReactNode` | `star-n` |
| checkedIcon | 使用图标(选中) | `ReactNode` | `star-n` |
| allowHalf | 是否半星 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| touchable | 是否允许滑动选择 ｜ `boolean` | `false` |
| onChange | 当前 star 数修改时触发 | `(value: number) => void` | `-` |
| onTouchEnd | TouchEnd 事件 | `(event: TouchEvent, value: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-rate-item-margin | 间距 | `14px` |
| \--nutui-rate-icon-color | icon 激活颜色 | `$color-primary` |
| \--nutui-rate-icon-inactive-color | icon 未激活颜色 | `$color-text-disabled` |
