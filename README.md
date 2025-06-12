# 塔罗牌动画交互H5应用使用说明

## 项目概述

这是一个基于React和TypeScript开发的塔罗牌动画交互H5应用，实现了完整的塔罗牌洗牌、抽牌、翻牌和运势分析功能。应用具有流畅的动画效果和直观的用户交互体验。

## 功能特点

1. **塔罗牌洗牌动画**：应用启动时展示生动的洗牌动画效果
2. **牌组平铺展示**：洗牌完成后，牌组自动平铺在屏幕上
3. **抽牌交互**：用户可以点击选择任意三张牌
4. **翻牌动画**：选中的牌会被抽出并展示在右侧区域，点击后可以翻转查看牌面
5. **运势分析**：翻开全部三张牌后，可以点击"分析本月运势"按钮获取基于大模型的运势分析
6. **响应式设计**：适配不同尺寸的屏幕，包括移动设备

## 技术栈

- React 18
- TypeScript
- Vite
- CSS3 动画
- 响应式设计

## 项目结构

```
tarot_app/
├── public/                # 静态资源
├── src/
│   ├── assets/            # 资源文件
│   │   └── tarot-cards.ts # 塔罗牌数据
│   ├── components/        # 组件
│   │   ├── TarotDeck.tsx  # 塔罗牌组件
│   │   ├── TarotReading.tsx # 塔罗牌解读组件
│   │   └── AnalysisService.tsx # 分析服务组件
│   ├── App.css            # 主样式
│   ├── animation-enhancements.css # 动画增强样式
│   ├── App.tsx            # 主应用组件
│   └── main.tsx           # 入口文件
├── index.html             # HTML入口
└── package.json           # 项目配置
```

## 使用方法

### 本地开发

1. 安装依赖：
   ```bash
   cd tarot_app
   pnpm install
   ```

2. 启动开发服务器：
   ```bash
   pnpm run dev
   ```

3. 在浏览器中访问：`http://localhost:5173/`

### 构建部署

1. 构建生产版本：
   ```bash
   pnpm run build
   ```

2. 构建完成后，`dist` 目录中的文件可以部署到任何静态网站托管服务

## 自定义与扩展

### 修改塔罗牌数据

编辑 `src/assets/tarot-cards.ts` 文件，可以修改塔罗牌的数据、图片和描述。

### 调整动画效果

动画相关的样式主要在 `src/App.css` 和 `src/animation-enhancements.css` 中，可以根据需要进行调整。

### 连接真实API

目前，运势分析功能使用的是模拟数据。要连接真实的大模型API，请修改 `src/components/AnalysisService.tsx` 中的 `requestAnalysis` 方法，替换为实际的API调用。

## 注意事项

1. 应用使用了在线图片资源，确保部署环境能够访问这些资源
2. 如需离线使用，建议下载塔罗牌图片并修改 `tarot-cards.ts` 中的图片路径
3. 分析按钮目前使用模拟数据，实际使用时需要替换为真实API调用

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器 (iOS Safari, Android Chrome)

## 许可

本项目仅供学习和参考使用。
