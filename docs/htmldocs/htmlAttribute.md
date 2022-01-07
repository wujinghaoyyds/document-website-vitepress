# 全局属性
全局属性（global attributes）是所有元素都可以使用的属性。也就是说，你可以把下面的属性，加在任意一个网页元素上面，不过有些属性对某些元素可能不产生意义。

## id、class
id 属性是元素在网页内的唯一标识符。 id属性的值必须是全局唯一的，且不得包含空格。 id属性的值还可以在最前面加上#，放到 URL 中作为锚点，定位到该元素在网页内部的位置。

class属性用来对网页元素进行分类。如果不同元素的class属性值相同，就表示它们是一类的。 元素可以同时具有多个 class，它们之间使用空格分隔。

## title
title属性用来为元素添加附加说明。大多数浏览器中，鼠标悬浮在元素上面时，会将title属性值作为浮动提示，显示出来。

## tabindex

tabindex属性的值是一个整数，表示用户按下 Tab 键的时候，网页焦点转移的顺序。不同的属性值有不同的含义。

- 负整数：该元素可以获得焦点，但不参与 Tab 键对网页元素的遍历。这个值通常是-1。
- 0：该元素参与 Tab 键的遍历，顺序由浏览器指定，通常是按照其在网页里面出现的位置。
- 正整数：网页元素按照从小到大的顺序（1、2、3、……），参与 Tab 键的遍历。如果多个元素的tabindex属性相同，则按照在网页源码里面出现的顺序遍历。

## accesskey

accesskey属性指定网页元素获得焦点的快捷键，该属性的值必须是单个的可打印字符。只要按下快捷键，该元素就会得到焦点。 accesskey属性的字符键，必须配合功能键，一起按下才会生效。

## style
style属性用来指定当前元素的 CSS 样式。

## hidden
hidden是一个布尔属性，表示当前的网页元素不再跟页面相关，因此浏览器不会渲染这个元素，所以就不会在网页中看到它。

注意，CSS 的可见性设置，高于hidden属性。如果 CSS 设为该元素可见，hidden属性将无效。

## lang，dir
lang属性指定网页元素使用的语言。

dir属性表示文字的阅读方向，有三个可能的值。

## contenteditable
HTML 网页的内容默认是用户不能编辑，contenteditable属性允许用户修改内容。该属性是枚举属性，不是布尔属性，规范的写法是最好带上属性值。

- true或空字符串：内容可以编辑
- false：不可以编辑

## spellcheck
浏览器一般会自带拼写检查功能，编辑内容时，拼错的单词下面会显示红色的波浪线。spellcheck属性就表示，是否打开拼写检查。

- true：打开拼写检查
- false：关闭拼写检查

## data-属性

data-属性用于放置自定义数据。如果没有其他属性或元素合适放置数据，就可以放在data-属性。

由于data-属性只能通过 CSS 或 JavaScript 利用。

## 事件处理属性

除了上面这些属性，全局属性还包括事件处理属性（event handler），用来响应用户的动作。这些属性的值都是 JavaScript 代码，这里只列出这些属性的名单。

>onabort, onautocomplete, onautocompleteerror, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragexit, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onshow, onsort, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting



