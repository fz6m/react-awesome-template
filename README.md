# react-awesome-template

一个完善的 react 项目起始模板，对 Restful 、css-in-js 、异步业务等有即开即用的支持

*template version: 1.2*

*react version: 17.0*

### Support

库|分类|说明
:-:|:-:|:-
`axios`| restful | 成熟的 Api 请求库
`swr`| restful | 流行的 Api 请求与缓存库
`redux-saga`| async | 提供 redux 中异步业务的支持
`react-redux`| global store | 全局状态管理
`less`| css | 支持使用 less 语法
`sass`| css | 支持使用 sass 语法
`@emotion`| css | 支持使用 css-in-js ( css props / styled-components )
`react-helmet`| resource | 对 HTML 文件头 `<head>` 提供完备支持

### Schema

路径|说明
:-:|:-
`src/api`| axios 统一 api 分发文件夹
`src/components/Head`| 支持 单页面 / 全局 的动态标题与资源引入
`src/components/SvgIcon`| 对 svg 复用提供支持
`src/icons/svg`| 全局 svg 存放文件夹
`src/pages`| 页面文件夹
`src/plugins`| 全局插件与配置文件夹
`src/router/header.js`| 各页面动态头部配置文件
`src/router/index.js`| 路由配置文件
`src/store`| redux 全局状态管理与 saga 异步业务文件夹
`src/styles`| 全局样式存放文件夹
`src/utils`| 全局工具存放文件夹
`src/utils/request.js`| axios 基础封装出口
`src/utils/swr.js`| swr fetcher 封装出口
`src/App.jsx`| router-view
`src/index.js`| react 应用入口
`src/index.scss`| 全局样式

### Options

文件|说明
:-:|:-
`.env.development`| 开发环境环境变量配置文件
`.env.production`| 生产环境环境变量配置文件
`config-overrides.js`| 基于 cra 对 react 配置复写文件

### Style

本模板采用 eslint + prettier 统一代码风格

文件|说明
:-:|:-
`.editorconfig`| 工作区文件统一格式配置
`.eslintignore`| eslint 忽略监测配置
`.eslintrc.js`| eslint 配置文件
`.prettierrc`| prettier 配置文件
`jsconfig.json`| 工作区目录识别配置

### Script

命令|说明
:-:|:-
`dev`| 启动热更新开发环境调试
`build`| 生产环境构建
`lint`| 执行 eslint 监测
`prettier`| 执行 prettier 自动修复代码格式

### Other

库|说明
:-:|:-
`redux-logger`| 支持开发环境实时 redux 调用日志
`react-hot-loader`| 提供开发环境对 react hooks 的即时替换支持
`svg-sprite-loader`| 提供全局 svg 复用
`script-ext-html-webpack-plugin`| 支持 runtime 抽取内联

### Example

以下默认示例代码仅供参考

路径|说明
:-:|:-
`src/api/index.js`| axios 统一 api 分发示例
`src/pages/Home/index.jsx`| css-in-js / less / css module 使用示例
`src/pages/Error/index.jsx`| 常规 api / redux-saga 使用示例
`src/pages/Error/swr.jsx`| swr 使用示例
`src/router/header.js`| 动态 HTML 文件头配置示例
`src/router/index.js`| 路由配置示例
`src/store/example`| redux-saga 编写示例
`src/index.scss`| sass 使用示例

### Build

执行生产环境发布前，请确认如下事项：

1. `public/index.html` 内 `<head>` 头部信息与该文件夹相关 logo 图标、`manifest.json` 配置

2. `.env.production` 内 `REACT_APP_BASE_API` 与 `PUBLIC_URL` 

3. `config-overrides.js` 内 `title` 变量与 `splitChunk` 分包策略