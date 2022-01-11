# CSS 背景

CSS 背景属性用于定义元素的背景效果。

background 简写属性在一个声明中设置所有的背景属性。没有固定的顺序要求。

## background-color

background-color 属性指定元素的背景颜色。

background-color 属性为元素设置一种纯色。这种颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界（但不包括外边距）。

|值         |	描述         |
|-----------|----|
|color_name	|规定颜色值为颜色名称的背景颜色（比如 red）。|
|hex_number	|规定颜色值为十六进制值的背景颜色（比如 #ff0000）。|
|rgb_number	|规定颜色值为 rgb 代码的背景颜色（比如 rgb(255,0,0)）。|
|transparent|默认。背景颜色为透明。|
|inherit	|规定应该从父元素继承 background-color 属性的设置。

opacity 属性指定元素的不透明度/透明度。取值范围为 0.0 - 1.0。值越低，越透明。注意：使用 opacity 属性为元素的背景添加透明度时，其所有子元素都继承相同的透明度。这可能会使完全透明的元素内的文本难以阅读。
## background-image

background-image 属性为元素设置背景图像。 元素的背景占据了元素的全部尺寸，包括内边距和边框，但不包括外边距。

默认地，背景图像位于元素的左上角，并在水平和垂直方向上重复。

|值	|描述|
|---|---|
|url('URL')	|指向图像的路径。|
|none	|默认值。不显示背景图像。|
|inherit	|规定应该从父元素继承 background-image 属性的设置。

根据 background-repeat 属性的值，图像可以无限平铺、沿着某个轴（x 轴或 y 轴）平铺，或者根本不平铺。

初始背景图像（原图像）根据 background-position 属性的值放置。

## background-repeat

background-repeat 属性设置是否及如何重复背景图像。

默认地，背景图像在水平和垂直方向上重复。

|值	|描述|
|----|----|
|repeat	|默认。背景图像将在垂直方向和水平方向重复。|
|repeat-x	|背景图像将在水平方向重复。|
|repeat-y	|背景图像将在垂直方向重复。|
|no-repeat	|背景图像将仅显示一次。|
|inherit	|规定应该从父元素继承 background-repeat 属性的设置。|

## background-attachment

background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动。

|值	|描述|
|---|---|
|scroll|	默认值。背景图像会随着页面其余部分的滚动而移动。|
|fixed|	当页面的其余部分滚动时，背景图像不会移动。|
|inherit|	规定应该从父元素继承 background-attachment 属性的设置。

## background-position

background-position 属性设置背景图像的起始位置。

| 值             | 描述            |
|----------------|---------------- |
|top、left、center、right、bottom中的两个词组合| 如果您仅规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。         |
| x% y%        | 第一个值是水平位置，第二个值是垂直位置。左上角是 0% 0%。右下角是 100% 100%。如果您仅规定了一个值，另一个值将是 50%。          |
| xpos ypos    | 第一个值是水平位置，第二个值是垂直位置。左上角是 0 0。单位是像素 (0px 0px) 或任何其他的 CSS 单位。如果您仅规定了一个值，另一个值将是50%。您可以混合使用 % 和 position 值。 |

## background-size

background-size 属性规定背景图像的尺寸。

值            | 描述           |
| ------------ | -----------  |
| length     | 设置背景图像的高度和宽度。第一个值设置宽度，第二个值设置高度。如果只设置一个值，则第二个值会被设置为 "auto"。       |
| percentage | 以父元素的百分比来设置背景图像的宽度和高度。第一个值设置宽度，第二个值设置高度。如果只设置一个值，则第二个值会被设置为 "auto"。 |
| cover    | 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。背景图像的某些部分也许无法显示在背景定位区域中。                 |
| contain | 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。     |

## background-origin

background-origin 属性规定 background-position 属性相对于什么位置来定位。

注释：如果背景图像的 background-attachment 属性为 "fixed"，则该属性没有效果。

|值           | 描述          |
| ----------- | --------------- |
| padding-box | 默认值。背景图像相对于内边距框来定位。 |
| border-box  | 背景图像相对于边框盒来定位。  |
| content-box | 背景图像相对于内容框来定位。|

## background-clip

background-clip 属性规定背景的绘制区域。

|值           | 描述           |
| ----------- | ----------- | 
| border-box  | 背景被裁剪到边框盒。 |
| padding-box | 背景被裁剪到内边距框。 |
| content-box | 背景被裁剪到内容框。|

## CSS 渐变

CSS 渐变使您可以显示两种或多种指定颜色之间的平滑过渡。

CSS 定义了两种渐变类型：

线性渐变（向下/向上/向左/向右/对角线）
径向渐变（由其中心定义）

### 线性渐变
如需创建线性渐变，您必须定义至少两个色标。色标是您要呈现平滑过渡的颜色。您还可以设置起点和方向（或角度）以及渐变效果。

语法

```
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

#### 线性渐变 - 从上到下（默认）

```
background-image: linear-gradient(red, yellow);
```

#### 线性渐变 - 从左到右

```
background-image: linear-gradient(to right, red , yellow);
```

#### 线性渐变 - 对角线

可以通过指定水平和垂直起始位置来实现对角渐变。

```
 background-image: linear-gradient(to bottom right, red, yellow);
```

#### 使用角度

如果希望对渐变角度做更多的控制，您可以定义一个角度，来取代预定义的方向（向下、向上、向右、向左、向右下等等）。值 0deg 等于向上（to top）。值 90deg 等于向右（to right）。值 180deg 等于向下（to bottom）。

语法

```
background-image: linear-gradient(angle, color-stop1, color-stop2);
```

#### 使用透明度

如需添加透明度，我们使用 rgba() 函数来定义色标。 rgba() 函数中的最后一个参数可以是 0 到 1 的值，它定义颜色的透明度：0 表示全透明，1 表示全彩色（无透明）。

#### 重复线性渐变

repeating-linear-gradient() 函数用于重复线性渐变。

```
background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
```

### 径向渐变

径向渐变由其中心定义。

如需创建径向渐变，您还必须定义至少两个色标。

语法
```
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

默认地，shape 为椭圆形，size 为最远角，position 为中心。

#### 径向渐变-均匀间隔的色标（默认）
```
background-image: radial-gradient(red, yellow, green);
```

#### 径向渐变-不同间距的色标

```
background-image: radial-gradient(red 5%, yellow 15%, green 60%);
```

#### shape 参数定义形状。它可接受 circle 或 ellipse 值。默认值为 ellipse（椭圆）。

```
background-image: radial-gradient(circle, red, yellow, green);
```

#### 使用大小不同的关键字

size 参数定义渐变的大小。它可接受四个值：

- closest-side
- farthest-side
- closest-corner
- farthest-corner

#### 重复径向渐变

repeating-radial-gradient() 函数用于重复径向渐变。

```
background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
```