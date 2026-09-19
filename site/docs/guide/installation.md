# 安装墨客

所有正式安装包均发布在 [GitHub Releases](https://github.com/talebook/moke/releases/latest)。

## 支持的平台

| 平台 | 安装包 | 最低系统要求 |
| --- | --- | --- |
| Windows | `.msi` / `.exe` | Windows 10 1809+ |
| macOS | `.dmg` | macOS 11+ |
| Linux | `.AppImage` / `.deb` | glibc 2.31+ |
| Android | `.apk` | Android 8+ |
| iOS / iPadOS | `.ipa` | iOS / iPadOS 17+ |
| OpenHarmony | `.hap`（Alpha） | HarmonyOS NEXT 5.0+，API 12 |

## Windows

优先使用 `.msi` 安装包；需要便携或不同安装流程时可选择 `.exe`。系统出现来源提示时，请确认文件来自官方 Release。

## macOS

打开 `.dmg` 并将墨客拖入“应用程序”。首次启动被系统拦截时，在“系统设置 → 隐私与安全性”中确认打开。

## Linux

- `.AppImage`：赋予可执行权限后运行，例如 `chmod +x Moke*.AppImage`。
- `.deb`：适用于 Debian、Ubuntu 及其衍生发行版。

系统 glibc 低于 2.31 时无法运行当前构建。

## Android

安装 `.apk` 时，系统可能要求允许浏览器或文件管理器安装未知来源应用。安装完成后可以关闭该权限。

## iOS 与 iPadOS

`.ipa` 需要自签名安装，并将设备 UDID 加入开发者描述文件。签名过期后可能需要重新安装。

## OpenHarmony

`.hap` 目前为 Alpha 且可能未签名，通常需要自行签名。遇到问题时请同时提供系统构建版本和 API 级别。

## 更新

墨客会在设置中提供更新检查。更新前关闭正在进行的下载；重要的本地书籍应做好备份。
