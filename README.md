# 墨客官网

墨客（Moke）官方网站与帮助文档。

- 官网保留现有静态页面与交互预览。
- 帮助文档使用与 Talebook 文档站一致的 VitePress 默认主题。
- `npm run build:all --prefix site` 会把官网与文档统一构建到 `site/dist/`。

## 本地开发

```bash
npm install --prefix site
npm run dev --prefix site
```

官网默认运行在 `http://localhost:5173`，文档运行在 `http://localhost:5174/docs/`。

## 构建

```bash
npm run build:all --prefix site
```
墨客（Moke）官方网站与使用文档
