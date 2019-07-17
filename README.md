# CocosCreatorForDeskApp
使用cocos creator开发游戏，打包桌面应用解决方案

## 使用说明
- 安装依赖`npm install`
- 运行: `npm run app` 

## 打包说明

### 打包前的准备工作

- 使用CocosCreator构建出一份web版本的游戏
- 将构建的web游戏拷贝到game目录,game目录文件示例
![](doc/c25d1182.png)

本项目采用的是`electron-builder`打包

- 全局安装`electron-builder`依赖: `npm install -g electron-builder`
- 打包:
    - win: `npm run pack-win`
    - mac: `npm run pack-mac`


## 后续开发功能
- 请查看相关issues
