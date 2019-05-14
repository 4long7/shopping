# shopping2

### 前台目录

views layout 布局
pages 里的 view 显示 router-view 的页面
components 里的是重复使用的元件

### 后台目录

admin layout 布局
pages 里的 admin 显示 router-view 的页面
components 里的是重复使用的元件

### 做不好的

一开始没有规划好，比如

1. scss 很多共同样式没做成一个 class 或 mixin
2. vue 也有同样的元件比如添加优惠券和修改优惠卷其实是差不多的，等做到修改优惠卷又重新修改了，元件名字就没改了
3. 还有的耦合性差比如按钮的转转，只用了一两个，后面有点按钮想用都难改
4. vuex 里的 action 不该有功能判断 功能应该写在元件下 以后才好管理
5. 资料逻辑修改写 getters 别写 computed

### 主要练习了

元件的规划使用，
event bus 使用
scss 使用，模组化
vuex 使用，模组化
api 窜接练习

### 使用的插件有

axios
vue-loading-overlay 实现 API 转转状态判断
vee-validate 表单验证 vue-i18n 验证中文化
vuex vue-router
eslint

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
