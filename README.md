
# XcomLibray
基于Vue的公共组件、模块库


## XCom
- XCom = X(无限、未知) + Com(GoCom)

## 安装
```shell
npm install xcom-library
```

## 使用
``` javascript
import Vue from 'vue'
import xcom from 'xcom'

Vue.use(xcom)

// or
import {
  DepartmentPanel,
  PersonnelPanel,
  CheckXork,
  meetings
  // ...
} from 'xcom'

Vue.component(DepartmentPanel.name, DepartmentPanel)
Vue.component(PersonnelPanel.name, PersonnelPanel)
```

## 浏览器兼容
Modern browsers and Internet Explorer 10+.

### 特性

- 分模块管理，独立组件开发。
- 使用gulp分模块打包。
- 使用sass样式预处理器。

### 支持环境

- Vue >= 2.6.0 < 3



### 安装
1、执行以下命令下载项目：
```bash
$ git clone https://github.com/jungang/XcomLibrary.git
```

2、安装依赖：
```bash
npm install 
```

3、启动项目：
```bash
npm run serve
```
然后就可以愉快的造轮子了

> 项目默认自带了 helloWorld,textComponent 两个示例组件，如不使用删除即可

#### 目录结构
| 目录/文件        | 说明   | 
| --------         | :-----  | 
| examples         | 组件示例，所有测试示例写在该文件夹下   |   
|   \|- App.vue    | 示例入口页面   |   
|   \|- main.js    | 示例入口文件   |  
| lib              | 打包后的文件，执行npm run lib 后生成  |  
| packages         | 组件文件，在该文件夹下开发组件  |
| \|- helloWord    | 示例组件 |
| \|- testComponent| 示例组件 |
| \|- init.js      | 组件统一导出文件  |
| public           | 静态资源文件  |
| styles           | 组件样式，在该文件夹下以 module 的维度建立各个组件的样式文件  |
| .npmignoer       | npm发布配置文件  |
| gulpfile.js      | gulp模块化打包配置文件 |

#### 配置 package.json 文件
```
| 参数        | 说明   | 
| --------    | :-----  | 
| name        | 组件名字，确保不会和别人的组件重名，可在 NPM 上测试搜索   |   
| version     | 版本号，默认是 1.0.1 ，之后每次发布，都要修改版本号   |   
| private     | 是否私有，设置为 false 才能发布   |   
| main        | 入口文件，指向我们打包好的 js 文件，一般默认就行   |  
| style       | 样式入口文件，默认就行   |  
| keywords    | 关键词   |  
| author      | 作者信息   | 
| peerDependencies      | 指定宿主项目依赖   | 


#### 打包
在项目跟目录执行：
```bash
npm run lib
```

#### 本地测试
1、本地生成一个 包名-1.0.1.tgz的包
```bash
npm pack
```
2、在另一个项目执行：
```bash
npm install 本地项目路径/包名-1.0.1.tgz
```
> 包名是 package.json 的 name 字段

3、然后就可以在项目中正常使用了
```javascript
import MyComponent from 'MyComponent';
Vue.use(MyComponent);
```
```html
<my-component />
```

#### 发布到npm
1、登录,在项目根目录下运行
```bash
npm login
```
> 登录成功后，登录信息会存放于全局，也就是说，下次更新发布组件，不需要再重新登录，可通过 npm whoami 可查看当前登录账号名。

2、发布
```bash
npm publish
```

## Links
- [XcomLibrary(github)](https://github.com/jungang/XcomLibrary)

## LICENSE
[MIT](LICENSE)
