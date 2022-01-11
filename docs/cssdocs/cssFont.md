# font

为了缩短代码，可以在一个属性中指定所有单个字体属性。

font 属性是以下属性的简写属性：

- font-style
- font-variant
- font-weight
- font-size/line-height
- font-family

注意：font-size 和 font-family 的值是必需的。如果缺少其他值之一，则会使用其默认值。

## font-family

规定文本的字体。

font-family 属性应包含多个字体名称作为“后备”系统，以确保浏览器/操作系统之间的最大兼容性。请以您需要的字体开始，并以通用系列结束。字体名称应以逗号分隔。

## font-style

主要用于指定斜体文本。

此属性可设置三个值：

- normal - 文字正常显示
- italic - 文本以斜体显示
- oblique - 文本为“倾斜”

## font-weight

指定字体的粗细。

|值	|描述|
|--|--|
|normal	|默认值。定义标准的字符。|
|bold	|定义粗体字符。|
|bolder	|定义更粗的字符。|
|lighter	|定义更细的字符。|
| number| 定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。|

## font-variant

指定是否以 small-caps 字体（小型大写字母）显示文本。

在 small-caps 字体中，所有小写字母都将转换为大写字母。但是，转换后的大写字母的字体大小小于文本中原始大写字母的字体大小。

## font-size

设置文本的大小。 如果没有指定字体大小，则普通文本（如段落）的默认大小为 16px（16px = 1em）。

- 以像素设置字体大小
- 用 em 设置字体大小，1em 等于当前字体大小。浏览器中的默认文本大小为 16px。因此，默认大小 1em 为 16px。
- 使用百分比和 Em 的组合
- 响应式字体大小，使用 vw 单位设置文本大小


























