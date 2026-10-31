运行 

```shell
yarn android
```

网页预览

```shell
npm run web
```

网页版仅提供界面预览，数据库页面会提示在移动端使用。Realm 数据库功能需要运行 Android 或 iOS 应用；Web 组件不加载 Realm 原生模块。

构建
```shell
npm i  add eas-cli -g

expo login

eas build:configure

eas build --platform android --profile production

```

npx expo prebuild --clean
