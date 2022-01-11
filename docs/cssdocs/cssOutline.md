# 轮廓

轮廓是在元素周围绘制的一条线，在边框之外，以凸显元素。

轮廓属性：

- outline-style
- outline-color
- outline-width
- outline-offset
- outline

注意：轮廓与边框不同！不同之处在于：轮廓是在元素边框之外绘制的，并且可能与其他内容重叠。同样，轮廓也不是元素尺寸的一部分；元素的总宽度和高度不受轮廓线宽度的影响。

outline 属性是用于设置以下各个轮廓属性的简写属性：

- outline-width
- outline-style（必需）
- outline-color

从上面的列表中，outline 属性可指定一个、两个或三个值。值的顺序无关紧要。

## outline-style

outline-style 属性指定轮廓的样式，并可设置如下值：

- dotted - 定义点状的轮廓。
- ashed - 定义虚线的轮廓。
- solid - 定义实线的轮廓。
- double - 定义双线的轮廓。
- groove - 定义 3D 凹槽轮廓。
- ridge - 定义 3D 凸槽轮廓。
- inset - 定义 3D 凹边轮廓。
- outset - 定义 3D 凸边轮廓。
- none - 定义无轮廓。
- hidden - 定义隐藏的轮廓。

## outline-width

outline-width 属性指定轮廓的宽度，并可设置如下值之一：

- thin（通常为 1px）
- medium（通常为 3px）
- thick （通常为 5px）
- 特定尺寸（以 px、pt、cm、em 计）

## outline-color

outline-color 属性用于设置轮廓的颜色。

可以通过以下方式设置颜色：

- name - 指定颜色名，比如 "red"
- HEX - 指定十六进制值，比如 "#ff0000"
- RGB - 指定 RGB 值，比如 "rgb(255,0,0)"
- HSL - 指定 HSL 值，比如 "hsl(0, 100%, 50%)"
- invert - 执行颜色反转（确保轮廓可见，无论是什么颜色背景）

## outline-offset

 属性在元素的轮廓与边框之间添加空间。元素及其轮廓之间的空间是透明的。