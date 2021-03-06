# eslint-入门 #

#### 导语 ####

>　　[eslint](http://eslint.org/) 最初是由Nicholas C. Zakas 于2013年6月创建的开源项目。它的目标是提供一个插件化的javascript代码检测工具。[eslint](http://eslint.org/) 使用 Node.js 编写，这样既可以有一个快速的运行环境的同时也便于安装。

## 一、认识eslint ##

>　　ESLint 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。

>　　JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调适。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。

>  　ESLint 的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。ESLint 的默认规则与其他的插件并没有什么区别，规则本身和测试可以依赖于同样的模式。为了便于人们使用，ESLint 内置了一些规则，当然，你可以在使用过程中自定义规则。

### eslint的作用

>　　在团队协作中，为避免低级 Bug、产出风格统一的代码，会预先制定编码规范。使用 Lint 工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。EsLint帮助我们检查Javascript编程时的语法错误。比如：在Javascript应用中，你很难找到你漏泄的变量或者方法。EsLint能够帮助我们分析JS代码，找到bug并确保一定程度的JS语法书写的正确性。

### eslint的原理

>  　ESLint 使用 Node.js 编写，这样既可以有一个快速的运行环境的同时也便于安装。EsLint是建立在Esprima(ECMAScript解析架构)的基础上的。Esprima支持ES5.1,本身也是用ECMAScript编写的，用于多用途分析。EsLint不但提供一些默认的规则（可扩展），也提供用户自定义规则来约束我们写的Javascript代码。

### eslint和其他检测工具的对比

**选自：** [A Comparison of JavaScript Linting Tools](https://www.sitepoint.com/comparison-javascript-linting-tools/)

**翻译参考：** [javascript检验工具的比较](http://developer.51cto.com/art/201506/481510.htm)


## 二、开始使用eslint ##
首先需要**安装**eslint

　　本地：`npm install eslint --save-dev`

　　全局：`npm install eslint -g`


*小tips*：如果平时自己开发使用就选全局安装，如果是需要分享的或是单独的模块就选本地安装。

　　运行`eslint --init`

　　即可`eslint yourfile.js` 检测

　　其实：`eslint --init`可以不必执行，它主要的作用是在你当前文件夹下生成.eslintrc文件，但同时也会把eslint在你当前文件夹下重新安装一遍，并且如果你使用包的话，它还会要求必须要有package.json文件，总之会很麻烦。也就是说完全可以自行生成一个.eslintrc文件，之后再填写规则。

  当然第一次使用的话，还是建议执行几次，可以初步了解配置文件大概是个什么样子。

>  　使用 JavaScript、JSON 或者 YAML 文件为整个目录和它的子目录指定配置信息。可以用 .eslintrc.* 文件或者在 package.json 文件里的 eslintConfig 字段这两种方式进行配置，ESLint 会查找和自动读取它们，再者，你可以在命令行指定一个配置文件。

   **再次注意**：ESLint 支持几种格式的配置文件，如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

1. JavaScript - 使用 `.eslintrc.js` 然后输出一个配置对象。（优先）
2. [YAML](http://www.ruanyifeng.com/blog/2016/07/yaml.html?f=tt) - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
3. JSON -使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
4. Deprecated -使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
5. package.json - 在 `package.json` 里创建一个 eslintConfig属性，在那里定义你的配置。

### eslint 命令行

　　常用的命令有：
-  \\(▔＾▔)/
- (╯▔︵▔)╯
- (╬▔▽▔)凸

　　其实，并没有，一般windows环境下不会通过命令行运行= =。可以运行`eslint -h`查看有哪些选项。[参考这个](http://eslint.cn/docs/user-guide/command-line-interface)

## 三、eslint的配置

　　我们可以试着先通过`eslint --init`生成一份简单的配置文件，看一下基本的配置结构是怎么样的。运行命令后会有3个选项可供选择：

- Answer questions about your style    通过回答一些问题生成自己风格的配置
- Use a popular style guide            使用流行的风格规范
- Inspect your JavaScript file(s)      检查js文件 （并没有用过~）

　　我选择第一个(一顿操作后)

![](src/images/eslint--init.png)

```
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
```
**env**

　　即Environments - 指定脚本的运行环境。

```
"env": {
  "browser": true,
  "commonjs": true,
  "es6": true
}
```

　　就比如设置了`"browser": true`后，即代表支持浏览器环境下特定的预定义全局变量，如`window`、`alert`等等。

　　同理commonjs、es6...，每种环境都有一组特定的预定义全局变量。当然肯定不止这么几种环境，具体的参考链接后面会给出。

　　还有一个比较相似的配置`globals`,配置的方式同`env`

```
"globals": {
  "aaa": true,
  "bbb": true
}
```
`globals`可以指定某个特定的变量为全局变量，一般用于自定义的变量。

**小tips：** 并不是说使用未指定的全局变量就会报错，需不需要提示错误是要在`rules`里添加规则的。

**extends**

　　extends可以继承一个或多个配置文件里的规则。

>　　上面使用配置js文件是以extends: 'eslint:recommended'为基础配置，但是大多数时候我们需要制定很多规则，在一个文件中写入会变得很臃肿，管理起来会很麻烦。

　　将多个规则的文件拆分成多个文件，然后通过extends继承各个文件，就像模块加载那样，结构会很清晰而且可以快速的切换规则。最大的作用是封装成一个规则模块，每个人都能使用该规则检测自己的代码。npm上就有很多以`eslint-config-`命名的模块，可以下载安装使用这些规则，或是开发小组内自定一套规则统一化组内的开发规范。

**parserOptions**

>JavaScript 语言选项

**plugins**

>插件

　　所有的配置都可以在[参考文档](http://eslint.cn/docs/user-guide/configuring#extending-configuration-files)里找到。

## 四、eslint规则

eslint规则的基本写法：

```
"rules": {
  "semi": [2,"always"],
  "no-console":2
}
```

其中key值代表规则名，value值配置该项规则

value的值可以是数字：0或字符串'0'或者是'off'，都代表不验证该项规则的意思（其实也可以删掉。）

同理 1、'1'、'warn'代表警告级别的错误（不满足这项规则将会报警告）

　　 2、'2'、'error'代表错误级别的错误（不满足这项规则将会报错误）

value的值还可以是一个数组，通常来讲数组的第一个值为错误等级（就是上面说的），数组中其他的值为该项规则的设置，如：

`"semi": [2,"always"]`

'semi'代表分号的验证，2（错误级别），'always'(每行代码末尾要加分号)

[点击查看完整规则](http://eslint.cn/docs/rules/)

eslint不仅提供了

- Possible Errors
- Best Practices
- Strict Mode
- Variables
- Node.js and CommonJS
- Stylistic Issues
- ECMAScript 6

这么多种类的规则，而且还支持拓展。

通过npm安装插件，然后在`plugins`里添加该模块，就能配置规则。

参考demo6,支持react语法的检测。

## 五、如何在代码编辑器里使用eslint

　　如果每次检测代码都需要运行命令，那将会显得相当繁琐，得不偿失。所以，最好的办法是将eslint工具搬到代码编辑器里，能够在写代码阶段就及时发现问题，才是这个工具的精髓所在。

前端常用的代码编辑器有：    
- [sublime Text](http://www.sublimetext.com/)
- [Brackets](http://brackets.io/)
- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [websorm](http://www.jetbrains.com/webstorm/)
- 等等

　　下面就以Atom为例：
  

　　首先需要安装`linter`和`linter-eslint`插件。是的，是首先，并不是说安装了这个插件就可以直接使用了，项目里还是需要添加eslint的依赖的（.eslintrc配置当然也要）。那有人就会说了每个待检查的文件都需要添加依赖吗？其实不用担心，这时候全局安装eslint的重要性就体现出来了。
  

　　该插件是支持全局配置ESLint的，需要更改`linter-eslint`的缺省配置：

  关闭  `Disable when no ESLint config is found`

  打开  `Use global ESLint installation`

  **如果路径有问题的，必要时，可以改一下Global Node Installation Path配置**

  最后还需添加一个全局的.eslintrc配置

>　　为项目服务的 .eslintrc.json 文件是放在项目文件夹下的，全局的 .eslintrc.json 文件则放在当前用户的根目录下，类Unix系统的当前用户目录是 ~ ，而Windows系统的话则是类似于 C:\Windows\Users\Username 这样的地方。

　　之后就可以使用atom检查任何一个js文件。

  报错信息将会直观的显示出来

  ![](src/images/atom-error-01.png)
  

## 六、如何将eslint融入到新项目或旧项目中

　　对于使用webpack的项目，我们需要安装`eslint-loader`。和其他的loader一样，`eslint-loader`需要在webpack.config.js里配置

```
{
  test: /\.js$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
}
```

　　如果还使用了`babel-loader`或是其他的`loader`，要把`eslint-loader`放在前面，毕竟我们要检测的是源代码。

```
{
  test: /\.js$/,
  loaders: ['babel-loader','eslint-loader'],
  exclude: /node_modules/,
}
```

　　或者是添加在preLoaders里，表示预先加载

```
preLoaders: [
  {
    test: /\.js$/,
    loader: "eslint-loader", exclude: /node_modules/
  }
]
```

**注意：** webpack2.某个版本删除掉了`preLoaders`这个属性。


　　本例子就是使用了webpack的，到项目目录下运行`npm run dev`，如果配置正确应该在控制台里会输出错误信息（= =我可能用的是假的webpack）。之后会发现，虽然会报错但是还是打包成功了，这显然不满足要求。

如果不通过eslint不能打包需要添加

```
module.exports:{
  ...
  eslint: {
    failOnError: false,
    failOnWarn: false,
  }
  ...
}
```

更多的使用方法和配置[点击这里](https://www.npmjs.com/package/eslint-loader)


### 拓展知识
- [YAML](http://www.ruanyifeng.com/blog/2016/07/yaml.html?f=tt)
- [LF和CRLF的区别](http://www.tuicool.com/articles/IJjQVb)
- [pre-commit](http://www.tuicool.com/articles/neaMvqm)
