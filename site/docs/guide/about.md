# 关于墨客

墨客（Moke）是 [Talebook](https://github.com/talebook/talebook) 的免费开源跨平台客户端。它不提供商业书城，也不会把你的藏书迁移到第三方平台。

## 三个项目如何配合

```text
Talebook 服务器  →  墨客客户端  →  Readest 阅读器
管理与提供书库      浏览与离线       排版与阅读
```

- **Talebook** 保存书籍、元数据、账号和书架状态。
- **墨客** 连接服务器，负责浏览、搜索、下载与多平台体验。
- **Readest** 内嵌在墨客中，负责 EPUB、PDF 等格式的阅读界面。

## 适合谁

墨客适合已经部署 Talebook，希望在电脑、手机和平板上使用统一客户端，并需要离线阅读的人。

如果还没有 Talebook 服务，请先阅读 [Talebook 项目说明](https://github.com/talebook/talebook)。墨客不能替代服务器，也不会自动创建在线书库。

## 功能边界

- 在线功能受 Talebook 版本、权限和服务器配置影响。
- 本地书架只保存当前设备已下载的书籍。
- 在线阅读与下载后阅读是两条独立流程。
- 系统默认阅读器不会同步墨客的阅读进度和笔记。

## 开源协议

墨客源代码位于 [talebook/moke](https://github.com/talebook/moke)，使用 GPLv3 许可证。
