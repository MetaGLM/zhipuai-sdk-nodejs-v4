# Contributing to ZhipuAI Node.js SDK

We welcome contributions to the ZhipuAI Node.js SDK! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js 14 or higher
- npm, yarn, or pnpm
- Git

### Development Setup

1. **Fork the Repository**
   
   Fork the repository on GitHub and clone your fork locally:
   
   ```bash
   git clone https://github.com/your-username/zhipuai-sdk-nodejs-v4.git
   cd zhipuai-sdk-nodejs-v4
   ```

2. **Install Dependencies**
   
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set Up Environment**
   
   Create a `.env` file in the root directory:
   
   ```env
   ZHIPUAI_API_KEY=your_api_key_here
   ```
   
   You can obtain an API key from the [ZhipuAI Open Platform](http://open.bigmodel.cn/).

## 📝 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run tests
npm test

# Run linting
npm run lint

# Run type checking (if TypeScript)
npm run type-check
```

### 4. Commit Your Changes

Use clear and descriptive commit messages:

```bash
git add .
git commit -m "feat: add support for new model parameter"
```

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub with:

- Clear title and description
- Reference to any related issues
- Screenshots or examples if applicable

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write unit tests for all new functionality
- Use descriptive test names
- Mock external dependencies
- Test both success and error cases

Example test structure:

```javascript
describe('ZhipuAI Client', () => {
  describe('createCompletions', () => {
    it('should create completions successfully', async () => {
      // Test implementation
    });
    
    it('should handle errors gracefully', async () => {
      // Error test implementation
    });
  });
});
```

## 📚 Documentation

### Code Documentation

- Use JSDoc comments for functions and classes
- Include parameter types and descriptions
- Provide usage examples

```javascript
/**
 * Creates a chat completion
 * @param {Object} params - The completion parameters
 * @param {string} params.model - The model to use
 * @param {Array} params.messages - The messages array
 * @param {boolean} [params.stream=false] - Whether to stream the response
 * @returns {Promise<Object>} The completion response
 * @example
 * const result = await ai.createCompletions({
 *   model: 'glm-4',
 *   messages: [{ role: 'user', content: 'Hello' }]
 * });
 */
async createCompletions(params) {
  // Implementation
}
```

### README Updates

When adding new features:

- Update both `README.md` and `README_CN.md`
- Add usage examples
- Update the API reference section

## 🔍 Code Review Process

1. **Automated Checks**: All PRs must pass automated tests and linting
2. **Peer Review**: At least one maintainer must review and approve
3. **Testing**: Verify that examples work as expected
4. **Documentation**: Ensure documentation is updated

## 🐛 Bug Reports

When reporting bugs, please include:

- Node.js version
- SDK version
- Minimal reproduction code
- Expected vs actual behavior
- Error messages and stack traces

## 💡 Feature Requests

For feature requests:

- Check existing issues first
- Provide clear use case and rationale
- Consider backward compatibility
- Offer to implement if possible

## 📋 Core Dependencies

The SDK uses these core dependencies:

| Library | Version | Purpose |
|---------|---------|----------|
| axios | ^1.6.7 | HTTP client for API requests |
| jsonwebtoken | ^9.0.2 | JWT token generation and validation |

When adding new dependencies:

- Justify the need
- Choose well-maintained libraries
- Consider bundle size impact
- Update the dependencies table

## 🔒 Security

For security-related issues:

- **DO NOT** open public issues
- Email security concerns to: open@zhipuai.cn
- Include detailed reproduction steps
- Allow time for assessment before disclosure

## 📞 Getting Help

If you need help:

- Check existing documentation
- Search existing issues
- Ask questions in discussions
- Contact maintainers: open@zhipuai.cn

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to ZhipuAI Node.js SDK! 🎉