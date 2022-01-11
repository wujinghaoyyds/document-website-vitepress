## color

color 属性用于设置文本的颜色。颜色由以下值指定：

- 颜色名 ， 比如 "red"
- 十六进制值 ， 比如 "#ff0000"
- RGB 值 ， 比如 "rgb(255,0,0)"
- inherit ， 从父元素继承颜色


## text-align

text-align 属性用于设置文本的水平对齐方式。

- text-align: center; 居中对齐
- text-align: left; 左对齐
- text-align: right; 右对齐
- text-align:justify; 两端对齐
- text-align:inherit; 从父元素继承

## vertical-align

vertical-align 属性设置元素的垂直对齐方式。

值           | 描述           |
| ----------- | ----------------------- |
| baseline    | 默认。元素放置在父元素的基线上。                       |
| sub         | 垂直对齐文本的下标。                             |
| super       | 垂直对齐文本的上标                              |
| top         | 把元素的顶端与行中最高元素的顶端对齐                     |
| text-top    | 把元素的顶端与父元素字体的顶端对齐                      |
| middle      | 把此元素放置在父元素的中部。                         |
| bottom      | 把元素的顶端与行中最低的元素的顶端对齐。                   |
| text-bottom | 把元素的底端与父元素字体的底端对齐。                     |
| %           | 使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。 |
| inherit     | 规定应该从父元素继承 vertical-align 属性的值。

## direction

direction 可用于更改元素的文本方向。

|值       | 描述                         |
| ------- | -------------------------- |
| ltr     | 默认。文本方向从左到右。               |
| rtl     | 文本方向从右到左。                  |
| inherit | 规定应该从父元素继承 direction 属性的值。

unicode-bidi 属性与 direction 属性一起使用，设置或返回是否应重写文本以支持同一文档中的多种语言。

|值     | 描述       |
| ---------------- | --------- |
| normal  | 默认值。元素不会打开额外的嵌入级别。 |
| embed   | 对于行内元素，此值将打开额外的嵌入级别。|
| bidi-override  | 对于行内元素，该值会创建一个覆盖；对于块容器元素，该值将为不在另一个块容器元素内的行内级别的后代创建一个覆盖。  |
| isolate   | 该元素与其同胞隔离。 |
| initial          | 将此属性设置为其默认值。 |
| inherit          | 从其父元素继承此属性。|


## text-decoration

text-decoration 属性规定添加到文本的修饰。

|值            | 描述                 |
| ------------ | ------------------- |
| none         | 默认。定义标准的文本。  通常用于从链接上删除下划线。                    |
| underline    | 定义文本下的一条线。                       |
| overline     | 定义文本上的一条线。                       |
| line-through | 定义穿过文本下的一条线。                     |
| blink        | 定义闪烁的文本。                         |
| inherit      | 规定应该从父元素继承 text-decoration 属性的值。|

## text-transform

text-transform 属性用于指定文本中的大写和小写字母。

|值          | 描述                              |
| ---------- | ------------------------------- |
| none       | 默认。定义带有小写字母和大写字母的标准的文本。         |
| capitalize | 文本中的每个单词以大写字母开头。                |
| uppercase  | 定义仅有大写字母。                       |
| lowercase  | 定义无大写字母，仅有小写字母。                 |
| inherit    | 规定应该从父元素继承 text-transform 属性的值。|

## 文字间距

### text-indent

text-indent 属性用于指定文本第一行的缩进：

### letter-spacing

letter-spacing 属性用于指定文本中字符之间的间距。

### line-height

line-height 属性用于指定行之间的间距。 在应用到一个块级元素时，它定义了该元素中基线之间的最小距离而不是最大距离。

### word-spacing

word-spacing 属性用于指定文本中单词之间的间距。

### white-space

white-space 属性指定元素内部空白的处理方式。

|值        | 描述                       |          
| -------- | ----------------------------------- |
| normal   | 默认。空白会被浏览器忽略。       |
| pre      | 空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签。 |
| nowrap   | 文本不会换行，文本会在在同一行上继续，直到遇到 `<br>` 标签为止。  |
| pre-wrap | 保留空白符序列，但是正常地进行换行。                  |
| pre-line | 合并空白符序列，但是保留换行符。                    |
| inherit  | 规定应该从父元素继承 white-space 属性的值。|

## text-shadow

text-shadow 属性为文本添加阴影。

语法

```
text-shadow: h-shadow v-shadow blur color;
```

|值          | 描述      |
| ---------- | --------- |
| h-shadow | 必需。水平阴影的位置。允许负值。 | 
| v-shadow| 必需。垂直阴影的位置。允许负值。  | 
| blur     | 可选。模糊的距离。 |
| color    | 可选。阴影的颜色。|

## text-overflow

text-overflow 属性规定当文本溢出包含元素时发生的事情。

|值        | 描述                |
| -------- | ------------------ | 
| clip     | 修剪文本。              |
| ellipsis | 显示省略符号来代表被修剪的文本。  |
| string | 使用给定的字符串来代表被修剪的文本。|

## word-wrap

word-wrap 属性使长文字能够被折断并换到下一行。

- normal	只在允许的断字点换行（浏览器保持默认处理）。
- break-word	在长单词或 URL 地址内部进行换行。

## word-break

word-break 属性规定自动换行的处理方法。

- normal	使用浏览器默认的换行规则。
- break-all	允许在单词内换行。
- keep-all	只能在半角空格或连字符处换行。

## writing-mode

writing-mode 属性规定文本行是水平放置还是垂直放置。

- horizontal-tb	让内容从左到右水平流动，从上到下垂直流动。
- vertical-rl	让内容从上到下垂直流动，从右到左水平流动。
- vertical-lr	让内容从上到下垂直流动，从左到右水平流动。

## text-justify

text-justify 属性指定 text-align 设置为 "justify" 时文本的对齐方式。

该属性规定如何对齐行文本进行对齐和分隔。

## text-align-last

text-align-last 属性规定如何对齐文本的最后一行。