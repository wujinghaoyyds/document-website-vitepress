# CSS 表格

使用 CSS 可以极大地改善 HTML 表格的外观：

表格边框
如需在 CSS 中设置表格边框，请使用 border 属性。

## border-collapse

border-collapse 属性设置是否将表格边框折叠为单一边框：

border-collapse 属性设置表格的边框是否被合并为一个单一的边框，还是象在标准的 HTML 中那样分开显示。

- separate	默认值。边框会被分开。不会忽略 border-spacing 和 empty-cells 属性。
- collapse	如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。
- inherit	规定应该从父元素继承 border-collapse 属性的值。

## border-spacing

border-spacing 属性设置相邻单元格的边框间的距离（仅用于“边框分离”模式）。

## caption-side

caption-side 属性设置表格标题的位置。

- top	默认值。把表格标题定位在表格之上。
- bottom	把表格标题定位在表格之下。

## empty-cells

empty-cells 属性设置是否显示表格中的空单元格（仅用于“分离边框”模式）。

- hide	不在空单元格周围绘制边框。
- show	在空单元格周围绘制边框。默认。

## tableLayout

tableLayout 属性用来显示表格单元格、行、列的算法规则。

- automatic	默认。列宽度由单元格内容设定。
- fixed	列宽由表格宽度和列宽度设定。

## 表格宽度和高度

表格的宽度和高度由 width 和 height 属性定义。


## 水平对齐

text-align 属性设置 `<th>` 或 `<td>` 中内容的水平对齐方式（左、右或居中）。

## 垂直对齐

vertical-align 属性设置 `<th>` 或 `<td>` 中内容的垂直对齐方式（上、下或居中）。

## 表格内边距

如需控制边框和表格内容之间的间距，请在 `<td>` 和 `<th>` 元素上使用 padding 属性：

## 可悬停表格

在 `<tr>` 元素上使用 :hover 选择器，以突出显示鼠标悬停时的表格行：



