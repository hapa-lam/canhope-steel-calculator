# CANHOPE STEEL Calculator

钢材重量计算与询盘工具第一版。

## 当前范围

- 镀锌管、镀锌板管、黑料钢管、方矩管、角钢、槽钢、沟槽管件
- 左侧点击产品添加到材料清单
- 同品类多行规格，不同品类共存
- 演示规格数据集中放在 `data/demo`
- 计算逻辑集中放在 `lib`
- 镀锌管、镀锌板管、黑料钢管和方矩管支持基础自定义尺寸计算
- 缺少重量时显示“重量待补充”，不计入总重量和 40HQ 估算
- 询盘预览与复制，不连接真实后台或邮件服务
- 桌面端表格，手机端规格卡片

## 本地运行

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run lint
```

本项目使用 Next.js App Router、TypeScript、Tailwind CSS 和 pnpm。
