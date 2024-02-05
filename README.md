# 智谱大模型开放接口SDK
智谱开放平台大模型接口 Nodejs SDK (Big Model API SDK in Nodejs)，让开发者更便捷的调用智谱开放API

## 简介

目前 SDK 处于刚开始开发阶段，有 bug 或者缺少需要的功能请提 issues

## 安装

```shell
npm install zhipuai-sdk-nodejs-v4
# or
yarn add zhipuai-sdk-nodejs-v4
```

## 使用

使用 apiKey 创建 Client，大部分操作都在这里进行

### 创建一个对话

调用 createCompletions 快速创建一个对话

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const dialogue = async () => {
    const ai = new ZhipuAI({
        // 填写您的 APIKey 不填的话默认从环境变量读取 ZHIPUAI_API_KEY 的值
        apiKey: ''
    })
    const data = await ai.createCompletions({
        model: "glm-4",
        messages: [
            {"role": "user", "content": "你好"},
            {"role": "assistant", "content": "我是人工智能助手"},
            {"role": "user", "content": "你叫什么名字"},
            {"role": "assistant", "content": "我叫chatGLM"},
            {"role": "user", "content": "你都可以做些什么事"}
        ],
        // 如果为 true data 就是一个 stream 对象，要通过 on('data', (buffer) => void) 读取数据
        stream: false, 
    })
    console.log(data, "message")
}

dialogue()
```

### 生成一个图片

调用 createImages 快速生成一个图片

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const createIamge = async () => {
    const ai = new ZhipuAI({
        // 填写您的 APIKey 不填的话默认从环境变量读取 ZHIPUAI_API_KEY 的值
        apiKey: ''
    })
    const result = await ai.createImages({
        model: "cogview-3",
        prompt: "一只可爱的小猫咪"
    })
    console.log(result.data, "image url list")
}

createIamge()
```

### 创建向量

调用 createEmbeddings 快速创建向量

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const createEmbeddings = async () => {
    const ai = new ZhipuAI({
        // 填写您的 APIKey 不填的话默认从环境变量读取 ZHIPUAI_API_KEY 的值
        apiKey: ''
    })
    const result = await ai.createEmbeddings({
        model: "embedding-2", 
        input: "你好"
    })
    console.log(data, "embedding")
}

createEmbeddings()
```


### 文件管理

调用 createFiles 快速创建文件
调用 findFiles 查询文件列表

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';
import { openAsBlob } from 'fs';

const filesOperations = async () => {
    const ai = new ZhipuAI({
        // 填写您的 APIKey 不填的话默认从环境变量读取 ZHIPUAI_API_KEY 的值
        apiKey: ''
    })
    const result = await ai.createFiles({
        file: await openAsBlob("file path"),
        purpose: "test"
    })
    console.log(result, "create file")

    const fileList = await ai.findFiles(
        purpose?: string;
        limit?: number;
        after?: string;
        order?: "desc" | "asc";
    )
    console.log(fileList, "find file list")
}

filesOperations()
```