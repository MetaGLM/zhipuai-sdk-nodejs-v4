# 智谱AI开放平台 Node.js SDK

[![npm version](https://img.shields.io/npm/v/zhipuai-sdk-nodejs-v4.svg)](https://www.npmjs.com/package/zhipuai-sdk-nodejs-v4)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-14%2B-green.svg)](https://nodejs.org/)

[English Readme](README.md)

[智谱AI开放平台](http://open.bigmodel.cn/howuse/platformintroduced)官方 Node.js SDK，帮助开发者快速集成智谱AI强大的人工智能能力到Node.js应用中。

## ✨ 特性

- 🚀 **类型安全**: 完整的TypeScript类型定义，提供优秀的开发体验
- 🔧 **简单易用**: 简洁直观的API设计，快速上手
- ⚡ **高性能**: 基于现代Node.js库构建，性能优异
- 🛡️ **安全可靠**: 内置身份验证和令牌管理
- 📦 **轻量级**: 最小化依赖，易于项目集成
- 🌊 **流式支持**: 完整支持流式响应处理

## 📦 安装

### 环境要求
- Node.js 14 或更高版本
- npm 或 yarn 或 pnpm

### npm 安装
```bash
npm install zhipuai-sdk-nodejs-v4
```

### yarn 安装
```bash
yarn add zhipuai-sdk-nodejs-v4
```

### pnpm 安装
```bash
pnpm add zhipuai-sdk-nodejs-v4
```

### 📋 核心依赖

本SDK使用以下核心依赖库：

| 依赖库 | 版本 |
|--------|------|
| axios | ^1.6.7 |
| jsonwebtoken | ^9.0.2 |

## 🚀 快速开始

### 基本用法

1. **使用API密钥创建客户端**
2. **调用相应的API方法**

### 客户端配置

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

// 使用环境变量中的API密钥
const ai = new ZhipuAI();

// 或者直接传入API密钥
const ai = new ZhipuAI({
    apiKey: 'your_api_key_here',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4', // 可选，默认值
    timeout: 30000, // 可选，请求超时时间
    cacheToken: true // 可选，是否缓存token
});
```

## 💡 使用示例

### 对话模型调用

#### 同步调用

- **基础对话**

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const dialogue = async () => {
    const ai = new ZhipuAI();
    const result = await ai.createCompletions({
        model: "glm-4",
        messages: [
            {"role": "user", "content": "智谱AI和ChatGLM是什么关系？"}
        ],
        stream: false
    });
    console.log(result);
};

dialogue();
```

#### 流式调用（SSE）

- **基础对话**

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const streamDialogue = async () => {
    const ai = new ZhipuAI();
    const stream = await ai.createCompletions({
        model: "glm-4",
        messages: [
            {"role": "user", "content": "智谱AI和ChatGLM是什么关系？"}
        ],
        stream: true
    });
    
    // 处理流式返回结果
    for await (const chunk of stream) {
        console.log(chunk.toString());
    }
};

streamDialogue();
```

## 📄 许可证

本项目基于 MIT 许可证开源 - 详情请查看 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎贡献代码！请随时提交 Pull Request。

## 📞 支持

如有问题和技术支持，请访问 [智谱AI开放平台](http://open.bigmodel.cn/) 或查看我们的文档。

## 🔗 相关链接

- [智谱AI开放平台](http://open.bigmodel.cn/)
- [GitHub仓库](https://github.com/winily/zhipuai-sdk-nodejs-v4)
- [npm包](https://www.npmjs.com/package/zhipuai-sdk-nodejs-v4)