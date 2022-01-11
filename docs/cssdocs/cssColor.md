# CSS 颜色

指定颜色是通过使用预定义的颜色名称，或 RGB、HEX、HSL、RGBA、HSLA 值。 可以为 HTML 元素设置背景色，文本的颜色，边框的颜色等。

[CSS/HTML 支持 140 种标准颜色名](https://www.w3school.com.cn/cssref/css_colors.asp)


## RGB 颜色

在 CSS 中，可以使用下面的公式将颜色指定为 RGB 值：**rgb(red, green, blue)**

- 每个参数 (red、green 以及 blue) 定义了 0 到 255 之间的颜色强度。

- 要显示黑色，请将所有颜色参数设置为 0，如下所示：rgb(0, 0, 0)。

- 要显示白色，请将所有颜色参数设置为 255，如下所示：rgb(255, 255, 255)。

RGBA 颜色值是具有 alpha 通道的 RGB 颜色值的扩展 - 它指定了颜色的不透明度。 RGBA 颜色值指定为：**rgba(red, green, blue, alpha)**

alpha 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。

## HEX 颜色

在 CSS 中，可以使用以下格式的十六进制值指定颜色： \# rrggbb

其中 rr（红色）、gg（绿色）和 bb（蓝色）是介于 00 和 ff 之间的十六进制值（与十进制 0-255 相同）。

例如，#ff0000 显示为红色，因为红色设置为最大值（ff），其他设置为最小值（00）。

## HSL 颜色

在 CSS 中，可以使用色相、饱和度和明度（HSL）来指定颜色，格式：**hsla(hue, saturation, lightness)**

- 色相（hue）是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色。
- 饱和度（saturation）是一个百分比值，0％ 表示灰色阴影，而 100％ 是全色。
- 亮度（lightness）也是百分比，0％ 是黑色，50％ 是既不明也不暗，100％是白色。

HSLA 颜色值是带有 Alpha 通道的 HSL 颜色值的扩展 - 它指定了颜色的不透明度。 HSLA 颜色值指定为： **hsla(hue, saturation, lightness, alpha)**

alpha 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字：
