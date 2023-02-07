---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 tesla-vue-components。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import teslaVueComponents from 'tesla-vue-components'
import 'tesla-vue-components/theme-default/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(teslaVueComponents)
app.mount('#app')
```

#### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["tesla-vue-components/global"]
  }
}
```

## 开始使用

您可以从现在起启动您的项目。 对于每个组件的用法，请参考单个组件对应的文档。
