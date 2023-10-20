# prettier-config-usagisah

个人 prettier 的设定集，同时也是 eslint-plugin-prettier 的底层配置依赖

内部目前支持程度

- 最新版`prettier@2.8.x`
- 对`package.json`进行排序
- 对`import`语句的自动，合并、去除、排序

## 下载

```shell
npm i prettier-config-usagisah
```

## 使用

```js
//.prettierrc.js
module.exports = {
  ...require("prettier-config-usagisah"),
};
```
