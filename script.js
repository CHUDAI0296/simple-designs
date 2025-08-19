class GameDesignAI {
    constructor() {
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.messagesContainer = document.getElementById('messages');
        this.featureCards = document.querySelectorAll('.feature-card');
        
        this.initializeEventListeners();
        this.initializeFeatureCards();
    }

    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    initializeFeatureCards() {
        this.featureCards.forEach(card => {
            card.addEventListener('click', () => {
                const feature = card.dataset.feature;
                this.handleFeatureClick(feature);
            });
        });
    }

    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // 添加用户消息
        this.addMessage(message, 'user');
        this.messageInput.value = '';

        // 显示加载状态
        this.showTypingIndicator();

        // 模拟AI响应
        setTimeout(() => {
            this.hideTypingIndicator();
            this.generateAIResponse(message);
        }, 1500);
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        
        const avatar = document.createElement('div');
        avatar.className = `${sender}-avatar`;
        avatar.textContent = sender === 'ai' ? 'AI' : '你';
        avatarDiv.appendChild(avatar);
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (typeof content === 'string') {
            contentDiv.innerHTML = this.formatMessage(content);
        } else {
            contentDiv.appendChild(content);
        }
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    formatMessage(message) {
        // 简单的markdown格式化
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <div class="ai-avatar">AI</div>
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        this.messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = this.messagesContainer.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateAIResponse(userMessage) {
        const responses = this.getContextualResponse(userMessage);
        this.addMessage(responses, 'ai');
    }

    getContextualResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('rpg') || lowerMessage.includes('角色扮演')) {
            return this.generateRPGResponse();
        } else if (lowerMessage.includes('fps') || lowerMessage.includes('射击')) {
            return this.generateFPSResponse();
        } else if (lowerMessage.includes('moba') || lowerMessage.includes('竞技')) {
            return this.generateMOBAResponse();
        } else if (lowerMessage.includes('ui') || lowerMessage.includes('界面')) {
            return this.generateUIResponse();
        } else if (lowerMessage.includes('动画') || lowerMessage.includes('动效')) {
            return this.generateAnimationResponse();
        } else {
            return this.generateGeneralResponse();
        }
    }

    generateRPGResponse() {
        return `我来为你设计RPG游戏界面！

**RPG游戏页面设计建议：**

🎯 **主界面布局**
- 顶部：角色头像、血量/魔法值条
- 左侧：技能栏和快捷键
- 右侧：小地图和任务列表
- 底部：聊天窗口和系统消息

✨ **视觉风格**
- 使用暖色调渐变背景
- 金属质感边框和按钮
- 半透明面板增强层次感
- 粒子效果增加魔幻氛围

🎨 **关键组件**
- 角色属性面板
- 背包系统界面
- 技能树展示
- 装备对比界面

需要我为你生成具体的代码实现吗？`;
    }

    generateFPSResponse() {
        return `FPS游戏界面设计方案：

**核心设计原则：**
- 简洁明了，不遮挡视野
- 快速响应，低延迟交互
- 高对比度，易于识别

🎯 **HUD设计**
- 准星：中心位置，可自定义样式
- 血量：左下角，红色渐变条
- 弹药：右下角，数字+图标
- 小地图：右上角，半透明圆形

⚡ **交互元素**
- 武器切换轮盘
- 击杀提示动画
- 伤害数字飞出效果
- 瞄准镜界面

需要我详细设计某个特定组件吗？`;
    }

    generateMOBAResponse() {
        return `MOBA游戏界面设计：

**界面布局规划：**

🎮 **游戏内HUD**
- 技能栏：屏幕底部中央，QWER布局
- 小地图：右下角，显示队友和敌人
- 装备栏：右侧，6格装备位
- 聊天系统：左下角，可折叠

📊 **数据展示**
- 英雄血量/蓝量条
- 经验值和等级显示
- 金币和击杀数统计
- 技能冷却时间

🎨 **视觉设计**
- 团队色彩区分（蓝/红）
- 技能图标发光效果
- 伤害数字动画
- 状态效果图标

想要我设计具体的组件样式吗？`;
    }

    generateUIResponse() {
        return `游戏UI设计最佳实践：

**设计原则：**

🎨 **视觉层次**
- 主要信息：大字体，高对比度
- 次要信息：中等字体，适中对比度
- 辅助信息：小字体，低对比度

✨ **交互反馈**
- 按钮悬停：颜色变化+轻微缩放
- 点击反馈：按下动画+音效
- 状态变化：平滑过渡动画

🎯 **布局规范**
- 8px网格系统
- 16px基础间距
- 黄金比例分割
- 响应式适配

📱 **组件库**
- 按钮：多种尺寸和状态
- 输入框：验证状态显示
- 卡片：阴影和圆角
- 模态框：背景模糊效果

需要我创建一个具体的组件吗？`;
    }

    generateAnimationResponse() {
        return `游戏动效设计指南：

**动画类型：**

⚡ **微交互动画**
- 按钮点击：0.15s弹性动画
- 悬停效果：0.2s缓动过渡
- 加载状态：循环旋转动画
- 通知提示：滑入滑出效果

🎭 **页面转场**
- 淡入淡出：适合场景切换
- 滑动切换：适合标签页
- 缩放动画：适合模态框
- 翻转效果：适合卡片展示

✨ **游戏特效**
- 粒子系统：技能释放效果
- 路径动画：移动轨迹显示
- 数值变化：计数器动画
- 状态反馈：震动和闪烁

🎨 **性能优化**
- 使用CSS3硬件加速
- 避免重排和重绘
- 合理使用requestAnimationFrame
- 动画帧率控制在60fps

想看具体的动画代码实现吗？`;
    }

    generateGeneralResponse() {
        const responses = [
            `我可以帮你设计各种类型的游戏界面！

**我的专长领域：**
- 🎮 RPG游戏界面设计
- ⚔️ FPS游戏HUD设计  
- 🏆 MOBA游戏UI设计
- 📱 手机游戏界面优化
- ✨ 游戏动效和交互设计

请告诉我你想设计什么类型的游戏页面，我会为你提供专业的设计方案和代码实现！`,

            `让我来帮你打造出色的游戏界面！

**设计服务包括：**
- 🎨 界面视觉设计
- 🔧 交互逻辑设计
- 📐 布局结构规划
- ⚡ 性能优化建议
- 🎯 用户体验优化

你可以描述一下你的游戏类型和设计需求，我会为你量身定制设计方案！`,

            `欢迎使用游戏设计AI助手！

**我能为你做什么：**
- 分析游戏类型，提供最适合的UI设计
- 创建现代化的游戏界面组件
- 优化用户交互体验
- 提供完整的前端代码实现
- 建议最佳的视觉设计方案

请分享你的游戏创意，让我们一起打造令人印象深刻的游戏界面！`
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }

    handleFeatureClick(feature) {
        const featureMessages = {
            'ui-design': '我想了解游戏UI设计的最佳实践',
            'layout': '请帮我设计一个响应式的游戏页面布局',
            'animation': '我需要为游戏界面添加动态效果',
            'components': '请为我创建一套游戏UI组件库'
        };
        
        const message = featureMessages[feature];
        if (message) {
            this.messageInput.value = message;
            this.sendMessage();
        }
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// 添加打字效果的CSS
const typingCSS = `
.typing-dots {
    display: flex;
    gap: 4px;
    align-items: center;
}

.typing-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #667eea;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) { animation-delay: -0.32s; }
.typing-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
    0%, 80%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}
`;

// 添加样式到页面
const style = document.createElement('style');
style.textContent = typingCSS;
document.head.appendChild(style);

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new GameDesignAI();
});

// 添加一些实用的工具函数
window.GameDesignUtils = {
    // 生成随机颜色
    generateRandomColor() {
        const colors = [
            '#667eea', '#764ba2', '#f093fb', '#f5576c',
            '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
            '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    },
    
    // 创建渐变背景
    createGradient(color1, color2, direction = '135deg') {
        return `linear-gradient(${direction}, ${color1}, ${color2})`;
    },
    
    // 添加动画类
    addAnimation(element, animationName, duration = '0.5s') {
        element.style.animation = `${animationName} ${duration} ease-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, parseFloat(duration) * 1000);
    }
};