#eslint-从入门到放弃#
####导语####
>　　[eslint](http://eslint.org/) 最初是由Nicholas C. Zakas 于2013年6月创建的开源项目。它的目标是提供一个插件化的javascript代码检测工具。[eslint](http://eslint.org/) 使用 Node.js 编写，这样既可以有一个快速的运行环境的同时也便于安装。

##一、认识eslint##
>　　ESLint 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。
>　　JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调适。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。
>  　ESLint 的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。ESLint 的默认规则与其他的插件并没有什么区别，规则本身和测试可以依赖于同样的模式。为了便于人们使用，ESLint 内置了一些规则，当然，你可以在使用过程中自定义规则。
>  　ESLint 使用 Node.js 编写，这样既可以有一个快速的运行环境的同时也便于安装。

##二、开始使用eslint##
首先需要**安装**eslint

　　本地：`npm install eslint --save-dev`
  
　　全局：`npm install eslint -g`
  
  
小tips：*为以后省事，推荐使用全局安装*
  
  
　　运行`eslint --init` (一顿配置后)


　　即可`eslint *yourfile.js*` 检测


　　其实：`eslint --init`可以不必执行，它主要的作用是在你当前文件夹下生成.eslintrc文件，但同时也会把eslint在你当前文件夹下重新安装一遍，并且如果你使用包的话，它还会要求必须要有package.json文件，总之会很麻烦。                也就是说
####eslint 命令行 ####                                 
　　可以运行`eslint -h`查看有哪些选项。  一般不会通过命令行运行= =可以[参考](http://eslint.cn/docs/user-guide/command-line-interface)

##三、eslint有哪些规则##

##四、如何在代码编辑器里使用eslint##                  
　　如果每次检测代码都需要运行命令，那将会显得相当繁琐，得不偿失。所以，最好的办法是将eslint工具搬到代码编辑器里，能够在写代码阶段就及时发现问题，才是这个工具的精髓所在。<br>
前端常用的代码编辑器有：    
- [sublime Text](http://www.sublimetext.com/)
- [Brackets](http://brackets.io/)
- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [websorm](http://www.jetbrains.com/webstorm/)
- 等等


　　这次就先对
##五、如何将eslint融入到新项目或旧项目中##


