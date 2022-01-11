# CSS 布局

## display

display 属性规定是否/如何显示元素。

每个 HTML 元素都有一个默认的 display 值，具体取决于它的元素类型。大多数元素的默认 display 值为 block 或 inline。 可以覆盖默认的 display 值，将行内元素更改为块元素，反之亦然。

|值            | 描述                         |
| ------------ | -------------------------- |
| none         | 此元素不会被显示。                  |
| block        | 此元素将显示为块级元素，此元素前后会带有换行符。   |
| inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。 |
| inline-block | 行内块元素。|


- display: none; 不占据页面空间的不可见元素。
- visibility:hidden; 也可以隐藏元素。但元素仍占据其本来的空间，不过可以完全不可见。
- opacity:0; 透明度为0，但元素任然在原来的位置。

## position

position 属性规定应用于元素的定位方法的类型（static、relative、fixed、absolute 或 sticky）。

元素其实是使用 top、bottom、left 和 right 属性定位的。但是，除非首先设置了 position 属性，否则这些属性将不起作用。根据不同的 position 值，它们的工作方式也不同。

### static

HTML 元素默认情况下的定位方式为 static（静态）。

静态定位的元素不受 top、bottom、left 和 right 属性的影响。

### relative

position: relative; 的元素相对于其正常位置进行定位。

设置相对定位的元素的 top、right、bottom 和 left 属性将导致其偏离其正常位置进行调整。不会对其余内容进行调整来适应元素留下的任何空间。

### fixed

position: fixed; 的元素是相对于视口定位的，这意味着即使滚动页面，它也始终位于同一位置。 top、right、bottom 和 left 属性用于定位此元素。

固定定位的元素不会在页面中，通常应放置的位置上留出空隙。

### absolute

position: absolute; 的元素相对于最近的定位祖先元素进行定位（而不是相对于视口定位，如 fixed）。

然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。

注意：“被定位的”元素是其位置除 static 以外的任何元素。

### sticky

position: sticky; 的元素根据用户的滚动位置进行定位。

粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置（比如 position:fixed）。

### z-index

在对元素进行定位时，它们可以与其他元素重叠。 z-index 属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。

元素可以设置正或负的堆叠顺序，具有较高堆叠顺序的元素始终位于具有较低堆叠顺序的元素之前。

注意：如果两个定位的元素重叠而未指定 z-index，则位于 HTML 代码中最后的元素将显示在顶部。

## overflow

overflow 属性指定在元素的内容太大而无法放入指定区域时是剪裁内容还是添加滚动条。

overflow 属性可设置以下值：

- visible - 默认。溢出没有被剪裁。内容在元素框外渲染
- hidden - 溢出被剪裁，其余内容将不可见
- scroll - 溢出被剪裁，同时添加滚动条以查看其余内容
- auto - 与 scroll 类似，但仅在必要时添加滚动条

- overflow-x 指定如何处理内容的左/右边缘。
- overflow-y 指定如何处理内容的上/下边缘。

## float

float 属性用于定位和格式化内容，例如让图像向左浮动到容器中的文本那里。

float 属性可以设置以下值之一：

- left - 元素浮动到其容器的左侧
- right - 元素浮动在其容器的右侧
- none - 元素不会浮动（将显示在文本中刚出现的位置）。默认值。
- inherit - 元素继承其父级的 float 值

最简单的用法是，float 属性可实现（报纸上）文字包围图片的效果。

clear 属性规定元素的哪一侧不允许其他浮动元素。

- left	在左侧不允许浮动元素。
- right	在右侧不允许浮动元素。
- both	在左右两侧均不允许浮动元素。
- none	默认值。允许浮动元素出现在两侧。
- inherit - 元素继承其父级的 clear 值

## 多列布局

CSS 多列布局允许我们轻松定义多列文本 - 就像报纸那样。

- column-count 属性规定元素应被划分的列数。
- column-gap 属性规定列之间的间隔。
- column-rule-style 属性规定列之间的规则样式。
- column-rule-width 属性规定列之间的规则宽度。
- column-rule-color 属性规定列之间的规则的颜色。
- column-rule 属性是用于设置上面所有 column-rule-* 属性的简写属性。
- column-span 属性规定元素应跨越多少列。
- column-width 属性为列指定建议的最佳宽度。

## 弹性布局flex

CSS Flexbox 布局模块

弹性框布局模块，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。

### 父元素（容器）

开始使用 Flexbox 模型需要首先定义 Flex 容器。 通过将 display 属性设置为 flex，flex 容器将可伸缩。

flex 容器属性

1. flex-direction 属性定义容器要在哪个方向上堆叠 flex 项目。
    - column 值设置垂直堆叠 flex 项目（从上到下）
    - column-reverse 值垂直堆叠 flex 项目（但从下到上）
    - row 值水平堆叠 flex 项目（从左到右）
    - row-reverse 值水平堆叠 flex 项目（但从右到左）
2. flex-wrap 属性规定是否应该对 flex 项目换行。
    - wrap 值规定 flex 项目将在必要时进行换行
    - nowrap 值规定将不对 flex 项目换行（默认）
    - wrap-reverse 值规定如有必要，弹性项目将以相反的顺序换行
3. flex-flow 属性是用于同时设置 flex-direction 和 flex-wrap 属性的简写属性。
4. justify-content 属性用于对齐 flex 项目。
    - center 值将 flex 项目在容器的中心对齐
    - flex-start 值将 flex 项目在容器的开头对齐（默认）
    - flex-end 值将 flex 项目在容器的末端对齐
    - space-around 值显示行之前、之间和之后带有空格的 flex 项目
    - space-between 值显示行之间有空格的 flex 项目
5. align-items 属性用于垂直对齐 flex 项目。
    - center 值将 flex 项目在容器中间对齐
    - flex-start 值将 flex 项目在容器顶部对齐
    - flex-end 值将弹性项目在容器底部对齐
    - stretch 值拉伸 flex 项目以填充容器（默认）
    - baseline 值使 flex 项目基线对齐

6. align-content 属性用于对齐弹性线。
    - space-between 值显示的弹性线之间有相等的间距
    - space-around 值显示弹性线在其之前、之间和之后带有空格
    - stretch 值拉伸弹性线以占据剩余空间（默认）
    - center 值在容器中间显示弹性线
    - flex-start 值在容器开头显示弹性线
    - flex-end 值在容器的末尾显示弹性线

### 子元素（项目）

flex 容器的直接子元素会自动成为弹性（flex）项目。

用于弹性项目的属性有：

1. order 属性规定 flex 项目的顺序。order 值必须是数字，默认值是 0。
2. flex-grow 属性规定某个 flex 项目相对于其余 flex 项目将增长多少。该值必须是数字，默认值是 0。
3. flex-shrink 属性规定某个 flex 项目相对于其余 flex 项目将收缩多少。该值必须是数字，默认值是 0。
4. flex-basis 属性规定 flex 项目的初始长度。
5. flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。
5. align-self 属性规定弹性容器内所选项目的对齐方式。 align-self 属性将覆盖容器的 align-items 属性所设置的默认对齐方式。

## 网格布局grid

CSS 网格布局模块（CSS Grid Layout Module）提供了带有行和列的基于网格的布局系统，它使网页设计变得更加容易，而无需使用浮动和定位。

网格布局由一个父元素以及一个或多个子元素组成。

### 网格容器

如需使 HTML 元素充当网格容器，您必须把 display 属性设置为 grid 或 inline-grid。网格容器的所有直接子元素将自动成为网格项目。

1. grid-template-columns 属性定义网格布局中的列数，并可定义每列的宽度。 该值是以空格分隔的列表，其中每个值定义相应列的长度。

   实例
   制作一个四列的网格布局，并规定每个列的尺寸：
   
    ```css
    .grid-container {
    display: grid;
    grid-template-columns: 30px 200px auto 100px;
    }
    ```

2. grid-template-rows 规定网格布局中的行数（和高度）。 值是用空格分隔的列表，其中每个值指定相应行的高度。

3. grid-template-areas 属性在网格布局中规定区域。 
   
    您可以使用 grid-area 属性命名网格项目，然后在 grid-template-areas 属性中引用该名称。

    ```css
    .item1 {
      grid-area: myArea;
    }
    .grid-container {
      grid-template-areas: 'myArea myArea myArea myArea .';
    }
    ```

    每个区域由撇号定义。请使用句号来引用没有名称的网格项目。 每行中的列都在撇号内定义，并以空格分隔。 如需定义两行，请在另一组撇号内定义第二行的列。

3. grid-template 属性是以下属性的简写属性：

    - grid-template-rows
    - grid-template-columns
    - grid-template-areas

   CSS 语法
   ```
    grid-template: none|grid-template-rows / grid-template-columns|grid-template-areas|initial|inherit;
   ```
4. grid-column-gap 属性设置列之间的间隙。

5. grid-row-gap 属性设置行之间的间隙。
   
6. grid-gap 属性是 grid-row-gap 和 grid-column-gap 属性的简写属性。grid-gap 属性还可用于将行间隙和列间隙设置为一个值
   
7. grid-auto-flow 属性控制自动放置的项目如何插入网格中。
   
8. justify-content 属性用于在容器内对齐整个网格。

9. align-content 属性用于垂直对齐容器内的整个网格。


### 子元素（项目）

网格容器包含网格项目。

默认情况下，容器在每一行的每一列都有一个网格项目，但是您可以设置网格项目的样式，让它们跨越多个列和/或行。

grid-column 属性定义将项目放置在哪一列上。您可以定义项目的开始位置以及结束位置。

1. grid-column 属性是 grid-column-start 和 grid-column-end 属性的简写属性。

    CSS 语法

    ```
    grid-column: grid-column-start / grid-column-end;
    ```

    如需放置某个项目，您可以引用行号（line numbers），或使用关键字 "span" 来定义该项目将跨越多少列。

2. grid-row 属性是 grid-row-start 和 grid-row-end 属性的简写属性。
   
    实例：使 "item1" 在行 1 开始并横跨两行：
   
    ```css
    .item1 {
    grid-row: 1 / span 2;
    }
    ```

   如需放置项目，您可以引用行号，或使用关键字 "span" 定义该项目将跨越多少行：

3. grid-area 属性可以用作 grid-row-start、grid-column-start、grid-row-end 和 grid-column-end 属性的简写属性。

