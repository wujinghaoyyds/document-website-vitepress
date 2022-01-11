# CSS 盒模型

CSS盒模型就是在网页设计中经常用到的CSS技术所使用的一种思维模型，指在一个网页文档中，每个元素都被呈现为一个矩形的盒子，描述了元素所占空间的内容。

盒子模型（Box Model）可以用来对元素进行布局，由实际内容（content）、内边距（padding）、边框（border）与外边距（margin）组成。

## 两种盒模型

它有两种盒模型，W3C盒模型和IE盒模型。

理论上两者的主要区别是二者的盒子宽高是否包括元素的边框和内边距。当用CSS给给某个元素定义高或宽时，IE盒模型中内容的宽或高将会包含内边距和边框，而W3C盒模型并不会。

### W3C盒子模型（标准盒模型）

标准盒模型的width与height只含content，不包括padding和border。

```
box-sizing: content-box
```

### IE盒子模型（怪异盒模型）

IE盒模型的width与height是content、padding和border的总和。
```
box-sizing: border-box
```


## margin

margin 属性用于在任何定义的边框之外，为元素周围创建空间。

margin 属性是以下各外边距属性的简写属性：

- margin-top
- margin-right
- margin-bottom
- margin-left

所有外边距属性都可以设置以下值：

- auto - 浏览器来计算外边距，以使元素在其容器中水平居中
- length - 以 px、pt、cm 等单位指定外边距
- % - 指定以包含元素宽度的百分比计的外边距
- inherit - 指定应从父元素继承外边距

提示：允许负值。

为了缩减代码，可以在一个属性中指定所有外边距属性，可以取1~4个值：

- 四个值：上、左、下、右
- 三个值：上、左右、下
- 两个值：上下、左右
- 一个值：四个边一样

### 外边距合并

外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。 合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。

## padding

padding 属性用于在任何定义的边界内的元素内容周围生成空间。

padding 属性是以下各内边距属性的简写属性：

- padding-top
- padding-right
- padding-bottom
- padding-left

所有内边距属性都可以设置以下值：

- length - 以 px、pt、cm 等单位指定内边距
- % - 指定以包含元素宽度的百分比计的内边距
- inherit - 指定应从父元素继承内边距

提示：不允许负值。

通 margin 属性一样，padding也可以取1~4个值，且不同值对应的情况一样。

## height和width

height 和 width 属性用于设置元素的高度和宽度。

height 和 width 属性可设置如下值：

- auto - 默认。浏览器计算高度和宽度。
- length - 以 px、cm 等定义高度/宽度。
- % - 以包含块的百分比定义高度/宽度。
- initial - 将高度/宽度设置为默认值。
- inherit - 从其父值继承高度/宽度。

可以用长度值（例如 px、cm 等）或包含块的百分比（％）来指定最值，也可以将其设置为 none（默认值）。

- max-width
- min-width
- max-height
- min-height

## box-shadow

box-shadow 属性向框添加一个或多个阴影。

语法

```
box-shadow: h-shadow v-shadow blur spread color inset;
```

|值	|描述	|
|---|---|
|h-shadow	|必需。水平阴影的位置。允许负值。|
|v-shadow	|必需。垂直阴影的位置。允许负值。|
|blur	|可选。模糊距离。	|
|spread	|可选。阴影的尺寸。	|
|color	|可选。阴影的颜色。请参阅 CSS 颜色值。|
|inset	|可选。将外部阴影 (outset) 改为内部阴影。|

