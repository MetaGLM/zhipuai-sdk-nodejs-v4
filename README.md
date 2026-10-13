# ZhipuAI Open Platform Node.js SDK

[![npm version](https://img.shields.io/npm/v/zhipuai-sdk-nodejs-v4.svg)](https://www.npmjs.com/package/zhipuai-sdk-nodejs-v4)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-14%2B-green.svg)](https://nodejs.org/)

[中文文档](README_CN.md)

The official Node.js SDK for [ZhipuAI Open Platform](http://open.bigmodel.cn/howuse/platformintroduced) Big Model API, enabling developers to easily integrate ZhipuAI's powerful AI capabilities into their Node.js applications.

## ✨ Features

- 🚀 **Type-safe API**: Complete TypeScript type definitions for excellent development experience
- 🔧 **Easy Integration**: Simple and intuitive API design for quick integration
- ⚡ **High Performance**: Built with modern Node.js libraries for optimal performance
- 🛡️ **Secure**: Built-in authentication and token management
- 📦 **Lightweight**: Minimal dependencies for easy project integration
- 🌊 **Streaming Support**: Full support for streaming response handling

## 📦 Installation

### Requirements
- Node.js 14 or higher
- npm, yarn, or pnpm

### npm
```bash
npm install zhipuai-sdk-nodejs-v4
```

### yarn
```bash
yarn add zhipuai-sdk-nodejs-v4
```

### pnpm
```bash
pnpm add zhipuai-sdk-nodejs-v4
```

### 📋 Dependencies

This SDK uses the following core dependencies:

| Library | Version |
|---------|---------|
| axios | ^1.6.7 |
| jsonwebtoken | ^9.0.2 |

## 🚀 Quick Start

### Basic Usage

1. **Create a Client** with your API key
2. **Call the desired API methods**

### Client Configuration

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

// Use API key from environment variable
const ai = new ZhipuAI();

// Or pass API key directly
const ai = new ZhipuAI({
    apiKey: 'your_api_key_here',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4', // Optional, default value
    timeout: 30000, // Optional, request timeout
    cacheToken: true // Optional, whether to cache token
});
```

## 💡 Examples

### Chat Model Invocation

#### Synchronous Invocation

- **Basic Chat**

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const dialogue = async () => {
    const ai = new ZhipuAI();
    const result = await ai.createCompletions({
        model: "glm-4",
        messages: [
            {"role": "user", "content": "What is the relationship between ZhipuAI and ChatGLM?"}
        ],
        stream: false
    });
    console.log(result);
};

dialogue();
```

#### JSON Mode

Use `responseFormat: { type: 'json_object' }` with a text model that supports
[JSON mode](https://docs.z.ai/guides/capabilities/struct-output). Describe the
expected JSON in your messages; JSON mode does not validate a JSON Schema.

```javascript
const result = await ai.createCompletions({
    model: 'glm-4.7',
    messages: [{ role: 'user', content: 'Return a JSON object with a greeting field.' }],
    responseFormat: { type: 'json_object' },
    stream: false
});
console.log(result.choices[0].message.content);
```

`responseFormat` maps to the API's `response_format` field. Its `type` can be
`'text'` or `'json_object'`; omitting the option preserves the API default.

#### Streaming Invocation (SSE)

- **Basic Chat**

```javascript
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const streamDialogue = async () => {
    const ai = new ZhipuAI();
    const stream = await ai.createCompletions({
        model: "glm-4",
        messages: [
            {"role": "user", "content": "What is the relationship between ZhipuAI and ChatGLM?"}
        ],
        stream: true
    });
    
    // Process streaming results
    for await (const chunk of stream) {
        console.log(chunk.toString());
    }
};

streamDialogue();
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📞 Support

- 📖 Documentation: [ZhipuAI Open Platform](http://open.bigmodel.cn/)
- 🐛 Issues: [GitHub Issues](https://github.com/zhipuai/zhipuai-sdk-nodejs-v4/issues)
- 💬 Community: [ZhipuAI Developer Community](http://open.bigmodel.cn/)

---

**Note**: This SDK is currently in active development. If you encounter any bugs or need additional features, please submit an issue.
