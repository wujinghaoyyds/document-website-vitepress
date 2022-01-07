# 链接标签

链接（hyperlink）是互联网的核心。它允许用户在页面上，从一个网址跳转到另一个网址，从而把所有资源联系在一起。 URL 是链接指向的地址。链接不仅可以指向另一个网页，也可以指向文本、图像、文件等资源。

## \<a>
链接通过`<a>`标签表示，用户点击后，浏览器会跳转到指定的网址。`<a>`标签内部不仅可以放置文字，也可以放置其他元素，比如段落、图像、多媒体等等。

`<a>`标签有如下属性。

1. href 属性给出链接指向的网址。它的值应该是一个 URL 或者锚点。

2. title 属性给出链接的说明信息。鼠标悬停在链接上方时，浏览器会将这个属性的值，以提示块的形式显示出来。

3. target属性指定如何展示打开的链接。
    - _self：当前窗口打开，这是默认值
    - _blank：新窗口打开
    - _parent：上层窗口打开
    -  _top：顶层窗口打开
4. ref 属性说明链接与当前页面的关系。
5. type 属性给出链接 URL 的 MIME 类型，比如到底是网页，还是图像或文件。
6. download 属性表明当前链接用于下载，而不是跳转到另一个 URL。

## 邮件链接
链接也可以指向一个邮件地址，使用mailto协议。用户点击后，浏览器会打开本机默认的邮件程序，让用户向指定的地址发送邮件。

除了邮箱，邮件协议还允许指定其他几个邮件要素。

- subject：主题
- cc：抄送
- bcc：密送
- body：邮件内容

使用方法是将这些邮件要素，以查询字符串的方式，附加在邮箱地址后面。

```html
<a href="mailto:mailto:contact@example.com?cc=test@test.com&subject=The%20subject&body=The%20body">发送邮件</a>
```

## 电话链接

如果是手机浏览的页面，还可以使用tel协议，创建电话链接。用户点击该链接，会唤起电话，可以进行拨号。
```html
<a href="tel:13312345678">13312345678</a>
```

## \<link>

`<link>` 标签主要用于将当前网页与相关的外部资源联系起来，通常放在`<head>`元素里面。最常见的用途就是加载 CSS 样式表。
```html
<link rel="stylesheet" type="text/css" href="theme.css">
```
`<link>`还可以加载网站的` favicon 图标文件。

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
```
- rel 属性表示外部资源与当前文档之间的关系，是<link>标签的必需属性。
- media 属性给出外部资源生效的媒介条件。

## \<script>
`<script>`用于加载脚本代码，目前主要是加载 JavaScript 代码。

- src 属性给出外部脚本的地址。
- type 属性给出脚本的类型，默认是 JavaScript 代码，也可以设成module，表示这是一个 ES6 模块。
- async：该属性指定 JavaScript 代码为异步执行，不是造成阻塞效果，JavaScript 代码默认是同步执行。
- defer：该属性指定 JavaScript 代码不是立即执行，而是页面解析完成后执行。

---

# 图像标签

图片是互联网的重要组成部分，让网页变得丰富多彩。

## \<img>

`<img>`标签用于插入图片，是一个行内元素，没有闭合标签。图片默认以原始大小插入网页。

- src 属性指定图片的网址
- alt 属性用来设定图片的文字说明，图片不显示时，图片的位置上会显示该文本
- width 属性和 height 属性可以指定图片显示时的宽度和高度，单位是像素或百分比
- loading 属性决定何时加载图片
    - auto：浏览器默认行为，等同于不使用loading属性
    - lazy：启用懒加载
    - eager：立即加载资源，无论它在页面上的哪个位置

- srcset 属性用来指定多张图像，适应不同像素密度的屏幕
- sizes 属性适应不同设备的图像显示宽度
   
## \<figure>\<figcaption>

`<figure>`标签可以理解为一个图像区块，将图像和相关信息封装在一起。`<figcaption>`是它的可选子元素，表示图像的文本描述，通常用于放置标题，可以出现多个。

## \<picture>

`<picture>`是一个容器标签，内部使用`<source>`和`<img>`，指定不同情况下加载的图像。

`<picture>`内部的`<source>`标签，主要使用media属性和srcset属性。media属性给出媒体查询表达式，srcset属性就是`<img>`标签的srcset属性，给出加载的图像文件。`<source>`标签的type属性给出图像的 MIME 类型，

`<img>`标签是默认情况下加载的图像，用来满足上面所有`<source>`都不匹配的情况，或者不支持`<picture>`的老式浏览器。