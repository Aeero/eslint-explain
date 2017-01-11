# eslint-从入门到放弃 #
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

　　运行`eslint --init` (一顿配置后)

　　即可`eslint yourfile.js` 检测

　　其实：`eslint --init`可以不必执行，它主要的作用是在你当前文件夹下生成.eslintrc文件，但同时也会把eslint在你当前文件夹下重新安装一遍，并且如果你使用包的话，它还会要求必须要有package.json文件，总之会很麻烦。也就是说完全可以自行生成一个.eslintrc文件，之后再填写规则。
  
>  　使用 JavaScript、JSON 或者 YAML 文件为整个目录和它的子目录指定配置信息。可以用 .eslintrc.* 文件或者在 package.json 文件里的 eslintConfig 字段这两种方式进行配置，ESLint 会查找和自动读取它们，再者，你可以在命令行指定一个配置文件。

   **再次注意**：ESLint 支持几种格式的配置文件，如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

1. JavaScript - 使用 `.eslintrc.js` 然后输出一个配置对象。（优先）
2. [YAML](http://www.ruanyifeng.com/blog/2016/07/yaml.html?f=tt) - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
3. JSON -使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
4. Deprecated -使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
5. package.json - 在 `package.json` 里创建一个 eslintConfig属性，在那里定义你的配置。

### eslint 命令行

　　常用的命令有：
- \(▔＾▔)/
- (╯▔︵▔)╯
- (╬▔▽▔)凸

　　其实，并没有，一般windows环境下不会通过命令行运行= =。可以运行`eslint -h`查看有哪些选项。[参考这个](http://eslint.cn/docs/user-guide/command-line-interface)

## 三、eslint的配置 

## 四、eslint有哪些规则 

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
  
  
## 五、如何将eslint融入到新项目或旧项目中 ##


