# 平台差异

墨客在各平台提供相同的书库和阅读主流程，但安装、存储与系统集成有所不同。

| 平台 | 最低要求 | 安装包 | 主要差异 |
| --- | --- | --- | --- |
| Windows | Windows 10 1809+ | `.msi` / `.exe` | 可选择下载目录，可调用系统阅读器 |
| macOS | macOS 11+ | `.dmg` | 首次启动可能需要在隐私与安全中确认 |
| Linux | glibc 2.31+ | `.AppImage` / `.deb` | AppImage 需要可执行权限 |
| Android | Android 8+ | `.apk` | 存储位置由系统管理 |
| iOS / iPadOS | 17+ | `.ipa` | 自签名安装需设备 UDID 加入描述文件 |
| OpenHarmony | NEXT 5.0+ / API 12 | `.hap` | Alpha，可能需要自行签名 |

## 桌面端

桌面端支持自定义下载目录、右键操作和系统默认阅读器。Windows、macOS、Linux 的具体文件集成由系统能力决定。

## 移动端与平板

移动端采用底部标签导航并由系统管理存储。长按书籍可打开上下文操作；系统返回手势会按应用导航栈返回。

## OpenHarmony

OpenHarmony 版本仍处于 Alpha 阶段，功能和稳定性可能落后于其他平台。反馈问题时请附上系统构建版本与 API 级别。
