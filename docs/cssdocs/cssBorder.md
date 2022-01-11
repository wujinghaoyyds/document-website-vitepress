# 边框

border 属性允许您指定元素边框的类型、宽度和颜色。

border 属性是以下各个边框属性的简写属性：

- border-width
- border-style（必需）
- border-color

```
border: width style color;
```

还可以只为一个边指定所有单个边框属性，如：

```
border-left: 6px solid red;
```


## border-style

border-style 属性指定要显示的边框类型。

允许以下值：

- dotted - 定义点线边框
- dashed - 定义虚线边框
- solid - 定义实线边框
- double - 定义双边框
- groove - 定义 3D 坡口边框。效果取决于 border-color 值
- ridge - 定义 3D 脊线边框。效果取决于 border-color 值
- inset - 定义 3D inset 边框。效果取决于 border-color 值
- outset - 定义 3D outset 边框。效果取决于 border-color 值
- none - 定义无边框
- hidden - 定义隐藏边框

## border-width

border-width 属性指定四个边框的宽度。

可以将宽度设置为特定大小（以 px、pt、cm、em 计），也可以使用以下三个预定义值之一：thin、medium 或 thick：

## border-color

border-color 属性用于设置四个边框的颜色。

- name - 指定颜色名，比如 "red"
- HEX - 指定十六进制值，比如 "#ff0000"
- RGB - 指定 RGB 值，比如 "rgb(255,0,0)"
- HSL - 指定 HSL 值，比如 "hsl(0, 100%, 50%)"
- transparent

注释：如果未设置 border-color，则它将继承元素的颜色。

## 单独的边

可以为每一侧指定不同的边框。

border-styl、border-width、border-color 可以设置一到四个值（用于上边框、右边框、下边框和左边框）。

- 属性设置四个值：分别是上、右、下、左；
- 属性设置三个值：上、左右、下；
- 属性设置两个值：上下、左右；
- 属性设置一个值：四条边；

或者另一种方式，如：

- border-top-style
- border-right-style
- border-bottom-style
- border-left-style

## border-radius

border-radius 属性用于向元素添加圆角边框：

border-radius 属性是一个简写属性，用于设置四个 border-*-radius 属性。
- border-top-left-radius
- border-top-right-radius
- border-bottom-right-radius
- border-bottom-left-radius

border-radius 属性可以接受一到四个值。规则如下：

- 四个值：依次分别用于：左上角、右上角、右下角、左下角
- 三个值：左上角，右上角和左下角，右下角
- 两个值：左上角和右下角，右上角和左下角
- 一个值：该值用于所有四个角，圆角都是一样的

## border-image

通过使用 border-image 属性，可以设置图像用作围绕元素的边框。

该属性有三部分：

- 用作边框的图像
- 在哪里裁切图像
- 定义中间部分应重复还是拉伸

border-image 属性实际上是以下属性的简写属性：

- border-image-source	规定用作边框的图像的路径。
- border-image-slice	规定如何裁切边框图像。
- border-image-width	规定边框图像的宽度。
- border-image-outset	规定边框图像区域超出边框盒的量。
- border-image-repeat	规定边框图像应重复、圆角、还是拉伸。