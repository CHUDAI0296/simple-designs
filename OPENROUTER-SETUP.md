# OpenRouter API 设置指南 - Claude Sonnet 4

## 概述

本指南将帮助您设置 OpenRouter API 来使用 Anthropic Claude Sonnet 4 模型。OpenRouter 是一个统一的AI模型API平台，让您可以轻松访问各种顶级AI模型。

## Claude Sonnet 4 模型特点

### 🚀 **核心能力**
- **编程专家**: 在编程任务中排名第一
- **技术分析**: 强大的技术问题解决能力
- **设计思维**: 优秀的设计原则理解和应用
- **长文本处理**: 支持200K上下文窗口
- **推理能力**: 先进的逻辑推理和问题分析

### 💰 **定价信息**
- **输入令牌**: $3/M (每百万个输入令牌)
- **输出令牌**: $15/M (每百万个输出令牌)
- **图像输入**: $4.80/K (每千张图像)

## 设置步骤

### 1. 注册 OpenRouter 账户

#### 访问 OpenRouter
- 前往 [OpenRouter.ai](https://openrouter.ai)
- 点击 "Sign Up" 或 "Get Started"

#### 创建账户
- 使用邮箱或GitHub账户注册
- 验证邮箱地址
- 完成账户设置

### 2. 获取 API 密钥

#### 访问 API 设置
- 登录后，点击右上角的用户头像
- 选择 "API Keys" 或 "Settings"

#### 生成新密钥
- 点击 "Create New Key"
- 为密钥添加描述（如："Simple Designs AI"）
- 选择权限范围（建议选择 "Full Access"）
- 复制生成的API密钥

### 3. 配置您的应用

#### 更新 API 配置
在 `api-config.js` 文件中：

```javascript
const aiAPI = new AIAPIManager();
aiAPI.setApiKey('your-actual-openrouter-api-key');
```

#### 验证配置
```javascript
// 测试API连接
const response = await aiAPI.sendMessage('Hello, can you help me with design?');
console.log(response);
```

### 4. 监控使用情况

#### 查看使用统计
- 在 OpenRouter 仪表板中查看API调用次数
- 监控令牌使用量和费用
- 设置使用限制和警报

#### 成本控制
- 设置每日/每月使用限制
- 监控异常使用模式
- 优化提示词减少令牌消耗

## API 参数说明

### 基本参数
```javascript
{
    model: 'anthropic/claude-sonnet-4',
    messages: [...],
    max_tokens: 4000,
    temperature: 0.7,
    stream: false
}
```

### OpenRouter 特定参数
```javascript
{
    route: 'fallback',           // 使用备用路由确保可用性
    transforms: ['claude_3_5_sonnet_20241022']  // 使用最新模型版本
}
```

## 最佳实践

### 🎯 **提示词优化**
- 使用清晰、具体的描述
- 提供上下文和示例
- 指定期望的输出格式
- 利用Claude的编程能力

### 💡 **设计相关提示词示例**
```
"请帮我设计一个现代化的电商网站首页，要求：
1. 响应式设计，支持移动端
2. 使用卡片式布局
3. 包含搜索栏、产品展示、导航菜单
4. 提供HTML、CSS和JavaScript代码"
```

### 🔧 **代码生成提示词**
```
"请为以下需求生成完整的代码：
- 创建一个可拖拽的卡片组件
- 支持触摸和鼠标操作
- 包含拖拽开始、进行中、结束的动画效果
- 使用现代ES6+语法"
```

## 故障排除

### 常见问题

#### API 密钥无效
- 检查密钥是否正确复制
- 确认密钥没有过期
- 验证账户状态是否正常

#### 请求失败
- 检查网络连接
- 验证API端点URL
- 查看错误响应详情

#### 模型不可用
- 检查模型名称是否正确
- 确认账户有足够余额
- 尝试使用备用路由

### 错误代码
- `401`: 认证失败，检查API密钥
- `403`: 权限不足，检查账户状态
- `429`: 请求过于频繁，等待后重试
- `500`: 服务器错误，稍后重试

## 安全建议

### 🔒 **API 密钥安全**
- 不要在客户端代码中暴露API密钥
- 使用环境变量存储敏感信息
- 定期轮换API密钥
- 监控异常使用模式

### 🛡️ **请求限制**
- 设置合理的速率限制
- 实施用户认证和授权
- 监控和记录API调用
- 防止恶意使用

## 联系支持

### OpenRouter 支持
- **文档**: [docs.openrouter.ai](https://docs.openrouter.ai)
- **Discord**: [OpenRouter Discord](https://discord.gg/openrouter)
- **GitHub**: [OpenRouter GitHub](https://github.com/openrouter-ai)

### 技术问题
- 查看官方文档和FAQ
- 在Discord社区寻求帮助
- 提交GitHub Issue
- 联系OpenRouter支持团队

## 下一步

设置完成后，您可以：
1. 测试API连接和响应质量
2. 优化提示词以获得更好的结果
3. 集成到您的设计AI助手中
4. 监控使用情况和成本
5. 探索其他可用的AI模型

---

**祝您使用愉快！** 🚀✨ 