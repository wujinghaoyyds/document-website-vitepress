# CSS 动画

## 2D转换

CSS 转换（transforms）允许您移动、旋转、缩放和倾斜元素。

通过使用 CSS transform 属性，您可以利用以下 2D 转换方法：

- translate()  从其当前位置移动元素（根据为 X 轴和 Y 轴指定的参数）。
- rotate()  根据给定的角度顺时针或逆时针旋转元素。
- scaleX()  增加或减少元素的宽度。
- scaleY()  增加或减少元素的高度。
- scale()  增加或减少元素的大小（根据给定的宽度和高度的倍数）。
- skewX()  使元素沿 X 轴倾斜给定角度。
- skewY()  使元素沿 Y 轴倾斜给定角度。
- skew()  使元素沿 X 和 Y 轴倾斜给定角度。
- matrix()  把所有 2D 变换方法组合为一个。可接受六个参数， 参数如下：matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())

#### transform-origin

transform-origin 属性允许您改变被转换元素的位置。

语法

```
transform-origin: x-axis y-axis z-axis;
```

- x-axis 定义视图被置于 X 轴的何处。
- y-axis 定义视图被置于 Y 轴的何处。
- z-axis 定义视图被置于 Z 轴的何处。

可能的值： left 、center 、right 、length 、%

默认值：	50% 50% 0

## 3D转换

通过 CSS transform 属性，您可以使用以下 3D 转换方法：

- matrix3d(n,n,n,n,n,n, n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。
- translate3d(x,y,z)	定义 3D 转化。可单独拆分translateX(x)、translateY(y)、translateZ(z)
- scale3d(x,y,z)	定义 3D 缩放转换。scaleX(x)、scaleY(y)、scaleZ(z)
- rotate3d(x,y,z,angle)	定义 3D 旋转。 rotateX()、rotateY()、rotateZ()  
- perspective(n)	定义 3D 转换元素的透视视图。
- perspective-origin	规定 3D 元素的底部位置。
- backface-visibility	定义元素在不面对屏幕时是否可见。
- transform-style	规定被嵌套元素如何在 3D 空间中显示。
- transform-origin	允许你改变被转换元素的位置。

## 过渡

CSS 过渡允许您在给定的时间内平滑地改变属性值。

- transition: property duration timing-function delay;  简写属性，用于将四个过渡属性设置为单一属性。
- transition-delay:time;  规定过渡效果的延迟（以秒计）。
- transition-duration:time;  规定过渡效果要持续多少秒或毫秒。
- transition-property: none|all|property;  规定过渡效果所针对的 CSS 属性的名称。
- transition-timing-function: linear（相同的速度）|ease（慢块慢）|ease-in（慢速开始）|ease-out（慢速结束）|ease-in-out（慢速开始和结束）|cubic-
- bezier(n,n,n,n)（三次贝塞尔函数中定义自己的值，值是 0 至 1 之间）;  规定过渡效果的速度曲线。

## 动画

CSS 可实现 HTML 元素的动画效果，而不使用 JavaScript 或 Flash！

动画使元素逐渐从一种样式变为另一种样式。

您可以随意更改任意数量的 CSS 属性。

如需使用 CSS 动画，您必须首先为动画指定一些关键帧。

关键帧包含元素在特定时间所拥有的样式。

在本章中，您将学习如下属性：

### @keyframes

通过 @keyframes 规则，您能够创建动画。 创建动画的原理是，将一套 CSS 样式逐渐变化为另一套样式。 在动画过程中，您能够多次改变这套 CSS 样式。

以百分比来规定改变发生的时间，或者通过关键词 "from" 和 "to"，等价于 0% 和 100%。 0% 是动画的开始时间，100% 动画的结束时间。

语法

```
@keyframes animationname {keyframes-selector {css-styles;}}
```

|值                    | 描述          |
| -------------------- | ---------- |
| animationname      | 必需。定义动画的名称。     |
| keyframes-selector | 必需。动画时长的百分比。合法的值：（0-100%）（from（与 0% 相同）to（与 100% 相同）） |
  | css-styles         | 必需。一个或多个合法的 CSS 样式属性。|

### animation-name

规定 @keyframes 动画的名称。

### animation-duration

animation-duration 属性定义动画完成一个周期所需要的时间，以秒或毫秒计。默认值是 0，意味着没有动画效果。

### animation-delay
animation-delay 属性规定动画开始的延迟时间。

负值也是允许的。如果使用负值，则动画将开始播放，如同已播放 N 秒。

### animation-iteration-count

animation-iteration-count: n|infinite; 指定动画应运行的次数。

- n  定义动画播放次数的数值。
- infinite	规定动画应该无限次播放。


### animation-direction

animation-direction 属性指定是向前播放、向后播放还是交替播放动画。

- normal - 动画正常播放（向前）。默认值
- reverse - 动画以反方向播放（向后）
- alternate - 动画先向前播放，然后向后
- alternate-reverse - 动画先向后播放，然后向前


### animation-timing-function

animation-timing-function 属性规定动画的速度曲线。

- ease - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）
- linear - 规定从开始到结束的速度相同的动画
- ease-in - 规定慢速开始的动画
- ease-out - 规定慢速结束的动画
- ease-in-out - 指定开始和结束较慢的动画
- cubic-bezier(n,n,n,n) - 运行您在三次贝塞尔函数中定义自己的值

### animation-fill-mode

在不播放动画时（在开始之前，结束之后，或两者都结束时），animation-fill-mode 属性规定目标元素的样式。

- none - 默认值。动画在执行之前或之后不会对元素应用任何样式。
- forwards - 元素将保留由最后一个关键帧设置的样式值（依赖 animation-direction 和 animation-iteration-count）。
- backwards - 元素将获取由第一个关键帧设置的样式值（取决于 animation-direction），并在动画延迟期间保留该值。
- both - 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性。

### animation

animation 属性是一个简写属性，用于设置六个动画属性：

语法

```
animation: name duration timing-function delay iteration-count direction;
```

### animation-play-state

animation-play-state: paused|running;  属性规定动画正在暂停还是运行。

注释：您可以在 JavaScript 中使用该属性，这样就能在播放过程中暂停动画。
































