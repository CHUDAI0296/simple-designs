// AI API Configuration - Claude Sonnet 4
class AIAPIManager {
    constructor() {
        this.apiEndpoint = 'https://api.openrouter.ai/api/v1/chat/completions'; // OpenRouter API端点
        this.apiKey = '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'; // 请替换为OpenRouter的API密钥
        this.model = 'anthropic/claude-sonnet-4'; // 使用的AI模型
        this.provider = 'anthropic'; // 模型提供商
    }

    // 设置API密钥
    setApiKey(apiKey) {
        this.apiKey = apiKey;
    }

    // 设置API端点
    setApiEndpoint(endpoint) {
        this.apiEndpoint = endpoint;
    }

    // 发送消息到Claude Sonnet 4 API
    async sendMessage(message, context = '') {
        const systemPrompt = `You are a professional design AI assistant specializing in helping users create modern interface designs. Your expertise includes:
        - UI/UX design principles and best practices
        - Frontend development technologies (HTML, CSS, JavaScript)
        - Interface layout and interaction design
        - Modern design trends and design systems
        - Responsive design and mobile adaptation
        - Design tools and component library usage
        
        Please respond to user questions in a professional yet friendly tone, providing practical design advice and code examples.
        Your answers should be specific, actionable, and aligned with modern design standards.
        
        You can respond in the same language as the user's question, but your core knowledge and technical explanations should be in English for accuracy.`;

        const requestBody = {
            model: this.model,
            messages: [
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: context ? `${context}\n\n${message}` : message
                }
            ],
            max_tokens: 4000, // Claude Sonnet 4支持更长的输出
            temperature: 0.7,
            stream: false,
                    // OpenRouter specific parameters
        route: 'fallback', // Use fallback route for availability
        transforms: ['claude_3_5_sonnet_20241022'] // Use latest Claude model
        };

        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`API请求失败: ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('API调用错误:', error);
            return this.getFallbackResponse(message);
        }
    }

    // 备用响应（当API不可用时）
    getFallbackResponse(message) {
        const fallbackResponses = {
            'ui': 'I recommend using modern card-based design with gradient colors and micro-animations to enhance user experience. Claude Sonnet 4 can help you create more intelligent design solutions.',
            'layout': 'I recommend using CSS Grid and Flexbox to create responsive layouts that ensure good display effects across different devices.',
            'animation': 'You can use CSS3 animations and JavaScript to create smooth interactive effects. I suggest using easing functions to make animations more natural.',
            'color': 'I recommend using complementary color combinations. You can choose blue-purple gradients as the main color and use orange or yellow as accent colors to highlight important elements.',
            'design': 'Based on modern design principles, I recommend adopting clean layouts, consistent visual hierarchy, and intuitive user interactions.',
            'responsive': 'For responsive design, focus on mobile-first approach, flexible grids, and adaptive typography to ensure optimal experience across all devices.'
        };

        const lowerMessage = message.toLowerCase();
        for (const [key, response] of Object.entries(fallbackResponses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }

        return '感谢你的问题！我会根据游戏设计的最佳实践为你提供专业的建议。请告诉我更多关于你的具体需求。';
    }

    // 生成设计建议
    async generateDesignSuggestion(gameType, requirements) {
        const prompt = `为${gameType}类型的游戏设计界面，需求：${requirements}`;
        return await this.sendMessage(prompt);
    }

    // 生成代码示例
    async generateCodeExample(component, style) {
        const prompt = `请为${component}组件生成${style}风格的HTML/CSS/JavaScript代码示例`;
        return await this.sendMessage(prompt);
    }
}

// 导出API管理器
window.AIAPIManager = AIAPIManager;

// 使用示例：
// const aiAPI = new AIAPIManager();
// aiAPI.setApiKey('your-openrouter-api-key');
// const response = await aiAPI.sendMessage('How to design a modern user interface?');

// Claude Sonnet 4 is particularly suitable for:
// - Complex design problem analysis
// - Detailed code generation
// - Design principle explanation
// - User experience optimization suggestions

// Example prompts in English:
// - "Design a responsive e-commerce homepage with modern UI components"
// - "Create a drag-and-drop card component with smooth animations"
// - "Explain the principles of material design and provide examples"
// - "Generate a complete CSS framework for a design system"