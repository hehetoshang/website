# 反馈问题与贡献

## 提交问题

在 [GitHub Issues](https://github.com/talebook/moke/issues) 提交前，请先升级到最新版本并搜索是否已有相同问题。

问题报告应包含：

1. 墨客版本与安装包类型
2. 操作系统、版本和设备类型
3. Talebook 版本
4. 是否处于在线或离线模式
5. 从启动应用开始的完整复现步骤
6. 必要的错误信息或截图

提交日志和截图前，请移除域名、局域网 IP、账号、访问码、Cookie、Token 和书籍隐私信息。

## 源代码关系

- [talebook/moke](https://github.com/talebook/moke)：墨客客户端
- [talebook/talebook](https://github.com/talebook/talebook)：自托管电子书服务器
- [hehetoshang/readest-reader](https://github.com/hehetoshang/readest-reader)：墨客内嵌阅读器

## 参与开发

墨客使用 Next.js、TypeScript 与 Tauri。Reader 是独立递归子模块；开始开发前应阅读仓库中的 `README.md`、`CONTRIBUTING.md` 以及 Reader 契约文档。

修改在线阅读、原生权限或 Reader IPC 时，需要保留逐书授权、路径 scope 和 sandbox iframe 等安全边界。
