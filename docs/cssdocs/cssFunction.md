## CSS 计数器

CSS 计数器就像“变量”。变量值可以通过 CSS 规则递增（将跟踪它们的使用次数）。

如需使用 CSS 计数器，我们将使用以下属性：

- counter-reset - 创建或重置计数器
- counter-increment - 递增计数器值
- content - 插入生成的内容
- counter() 或 counters() 函数 - 将计数器的值添加到元素

## var() 函数

var() 函数用于插入 CSS 变量的值。

CSS 变量可以访问 DOM，这意味着您可以创建具有局部或全局范围的变量，使用 JavaScript 来修改变量，以及基于媒体查询来修改变量。

语法

```
var(name, value)
```

|值       | 描述                 |
| ------- | ------------------ |
| *name*  | 必需。变量名（以两条破折号开头）。  |
| *value* | 可选。回退值（在未找到变量时使用）。|

注释：变量名称必须以两个破折号（--）开头，且区分大小写！

### var() 如何工作

首先：CSS 变量可以有全局或局部作用域。 全局变量可以在整个文档中进行访问/使用，而局部变量只能在声明它的选择器内部使用。

- 如需创建具有全局作用域的变量，请在 :root 选择器中声明它。 :root 选择器匹配文档的根元素。
- 如需创建具有局部作用域的变量，请在将要使用它的选择器中声明它。

有时，我们希望变量仅在页面的特定部分中进行更改。

假设我们想要按钮元素使用不同的蓝色。那么，我们可以在 button 选择器内重新声明 --blue 变量。当我们在这个选择器中使用 var(--blue) 时，它将使用此处声明的局部 --blue 变量值。 局部的 --blue 变量会覆盖 button 元素的全局 --blue 变量：



## 函数参考手册

CSS 函数用作各种CSS属性的值。

| 函数                                                                                                                                        | 描述                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [attr()](https://www.w3school.com.cn/cssref/func_attr.asp "CSS attr() 函数")                                                                | 返回所选元素的属性值。                    |
| [calc()](https://www.w3school.com.cn/cssref/func_calc.asp "CSS calc() 函数")                                                                | 允许您执行计算来确定 CSS 属性值。            |
| [cubic-bezier()](https://www.w3school.com.cn/cssref/func_cubic-bezier.asp "CSS cubic-bezier() 函数")                                        | 定义三次贝塞尔曲线。                     |
| [hsl()](https://www.w3school.com.cn/cssref/func_hsl.asp "CSS hsl() 函数")                                                                   | 使用色相-饱和度-亮度模型（HSL）定义颜色。        |
| [hsla()](https://www.w3school.com.cn/cssref/func_hsla.asp "CSS hsla() 函数")                                                                | 使用色相-饱和度-亮度-阿尔法模型（HSLA）定义颜色。   |
| [linear-gradient()](https://www.w3school.com.cn/cssref/func_linear-gradient.asp "CSS linear-gradient() 函数")                               | 将线性渐变设置为背景图像。定义至少两种颜色（从上到下）。   |
| [radial-gradient()](https://www.w3school.com.cn/cssref/func_radial-gradient.asp "CSS radial-gradient() 函数")                               | 将径向渐变设置为背景图像。定义至少两种颜色（从中心到边缘）。 |
| [repeating-linear-gradient()](https://www.w3school.com.cn/cssref/func_repeating-linear-gradient.asp "CSS repeating-linear-gradient() 函数") | 重复线性渐变。                        |
| [repeating-radial-gradient()](https://www.w3school.com.cn/cssref/func_repeating-radial-gradient.asp "CSS repeating-radial-gradient() 函数") | 重复径向渐变。                        |
| [rgb()](https://www.w3school.com.cn/cssref/func_rgb.asp "CSS rgb() 函数")                                                                   | 使用红-绿-蓝模型（RGB）定义颜色。            |
| [rgba()](https://www.w3school.com.cn/cssref/func_rgba.asp "CSS rgba() 函数")                                                                | 使用红-绿-蓝-阿尔法模型（RGB）定义颜色。        |
| [var()](https://www.w3school.com.cn/cssref/func_var.asp "CSS var() 函数")                                                                   | 插入自定义属性的值。|






