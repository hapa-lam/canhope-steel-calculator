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

默认开发命令：

```bash
pnpm run dev
```

默认测试地址：

```text
http://localhost:3000
```

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run lint
```

本项目使用 Next.js App Router、TypeScript、Tailwind CSS 和 pnpm。

## 项目文档

- `AGENTS.md` 用于 Codex/AI 开发协作规则。
- `CHANGELOG.md` 用于正式版本变化记录。

## 交付约定

每次完成开发、数据接入或页面调整后，都需要提供一个可打开的测试链接，方便直接在浏览器中检查效果。

默认本地测试链接使用开发服务器地址，例如：

```text
http://localhost:3000
```

如果该端口被占用，应使用实际启动成功的端口，并在完成汇报中明确写出测试地址。
