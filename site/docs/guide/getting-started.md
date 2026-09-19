# 快速开始

完成安装、连接和第一次阅读通常只需要几分钟。

## 开始前检查

- 已有一个可以访问的 Talebook 服务
- 知道完整服务地址，例如 `https://books.example.com`
- 如果服务器开启了访问码，已经取得访问码
- 如果书库需要登录，已经拥有账号或服务器允许注册

## 第一步：安装

从 [GitHub Releases](https://github.com/talebook/moke/releases/latest) 下载与你的平台匹配的安装包。不要从不明镜像下载修改过的安装文件。

平台要求和安装注意事项见[安装墨客](/guide/installation)。

## 第二步：连接

1. 打开墨客，在“连接书库”中输入 Talebook 地址。
2. 地址未写协议时，墨客会按 HTTP 尝试；建议主动写完整的 `http://` 或 `https://`。
3. 连接成功后，墨客会根据服务器设置进入访问码、登录或书架页面。

```text
https://books.example.com
http://192.168.1.100:8080
```

详细说明见[连接 Talebook](/guide/connect-talebook)。

## 第三步：打开一本书

1. 进入“书库”或使用搜索。
2. 点击封面打开详情页。
3. 选择“在线阅读”，或先下载再从书架打开。

在线 EPUB 能否按需打开，取决于服务器是否提供安全 Range 接口。无法在线阅读时，使用下载后阅读即可。

## 没有网络时

连接页可直接进入离线模式。离线模式只显示当前设备已完整下载的书籍；从未下载的远程书籍无法离线打开。

## 接下来

- [认识界面](/guide/interface)
- [书库、搜索与书架](/guide/library)
- [下载与离线阅读](/guide/offline-reading)
- [常见问题](/guide/troubleshooting)
