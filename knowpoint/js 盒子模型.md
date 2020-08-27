### offset
> offset 指偏移，包括这个元素在文档中占用的所有显示宽度，包括滚动条、padding、border，不包括overflow隐藏的部分

offsetParent属性返回一个对象的引用，这个对象是距离调用offsetParent的父级元素中最近的（在包含层次中最靠近的），并且是已进行过CSS定位的容器元素。 如果这个容器元素未进行CSS定位, 则offsetParent属性的取值为根元素的引用。

如果当前元素的父级元素中没有进行CSS定位（position为absolute/relative），offsetParent为body
如果当前元素的父级元素中有CSS定位（position为absolute/relative），offsetParent取父级中最近的元素
obj.offsetWidth 指 obj 控件自身的绝对宽度，不包括因 overflow 而未显示的部分，也就是其实际占据的宽度，整型，单位：像素。
offsetWidth = border-width*2+padding-left+width+padding-right
obj.offsetHeight 指 obj 控件自身的绝对高度，不包括因 overflow 而未显示的部分，也就是其实际占据的高度，整型，单位：像素。
offsetHeight = border-width*2+padding-top+height+padding-bottom
obj.offsetTop 指 obj 相对于版面或由 offsetParent 属性指定的父坐标的计算上侧位置，整型，单位：像素。
offsetTop= offsetParent的padding-top + 中间元素的offsetHeight + 当前元素的margin-top
obj.offsetLeft 指 obj 相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置，整型，单位：像素。
offsetLeft= offsetParent的padding-left + 中间元素的offsetWidth + 当前元素的margin-left

### scroll
> scroll指滚动，包括这个元素没显示出来的实际宽度，包括padding，不包括滚动条、border

scrollHeight 获取对象的滚动高度，对象的实际高度；
scrollLeft 设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth 获取对象的滚动宽度

### client
> client指元素本身的可视内容，不包括overflow被折叠起来的部分，不包括滚动条、border，包括padding

clientWidth 对象可见的宽度，不包括滚动条等边线，会随窗口的显示大小改变
clientHeight 对象可见的高度
clientTop、clientLeft 这两个返回的是元素周围边框的厚度，一般它的值就是0。因为滚动条不会出现在顶部或者左侧