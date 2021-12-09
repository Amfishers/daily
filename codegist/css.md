### 加载中...动画

```
<!--css-->
.loading:after {
    content: ".";
    animation: loading 2s ease infinite;
}

@keyframes loading {
    33% {
        content: "..";
    }
    66% {
        content: "...";
    }
}

<!--html-->
<p class="loading">加载中 </p>
```

### css 添加章节数

```
<!--css-->
ul{
    counter-reset: section;
}
li{
    list-style-type: none;
    counter-increment: section;
}
li:before{
    content: counters(section, '-') '.';
}


<!--html-->
<ul>
    <li>章节一</li>
    <li>章节二
        <ul>
            <li>章节二一</li>
            <li>章节二二</li>
            <li>章节二三</li>
        </ul>
    </li>
    <li>章节三</li>
    <li>章节四</li>
    <li>章节五
        <ul>
            <li>章节五一</li>
            <li>章节五二</li>
        </ul>
    </li>
    <li>章节六</li>
</ul>

```

这里用到了 counter 计数器方法，涉及到 counter-reset、counter-increment、counter()和 counters()几个属性。

counter-reset 用来指定计数器名称，例子中命名为 section，同时可以指定计数器开始计数的数值，如指定开始计数数值为 1：counter-reset: section 1;，不指定默认为 0。

counter-increment 用来指定计数器每次递增的值，如指定计数器递增值为 2：counter-increment: section 2;，默认值为 1，counter-increment 只要指定了 counter-reset，对应的计数器的值就会变化。

counter(name, style)用来输出计数器的值。其中 name 为计数器名称，style 可选参数，默认为阿拉伯数字，也可指定 list-style-type 支持的值，如罗马数字 lower-roman。

counters(name, strings, style)用来处理嵌套计数器，同样是输出计数器的值，和 counter()不同的是多了一个 strings 参数，表示子序号的连接字符串。例如 1.1 的 string 就是'.'，1-1 就是'-'。

关于计数器的详细的教程，同样可以参考 CSS 大神张鑫旭的[CSS counter 计数器(content 目录序号自动递增)详解。](http://www.zhangxinxu.com/wordpress/?p=4303)

### 计算 checkbox 选中数

```
<!--css-->
form {
    counter-reset: count 0;
}

input[type="checkbox"]:checked {
    counter-increment: count 1;
}

.result:after {
    content: counter(count);
}

<!--html-->
<form>
    <input type="checkbox" id="javaScript">
    <label for="javaScript">javaScript</label>
    <input type="checkbox" id="PHP">
    <label for="PHP">PHP</label>
    <input type="checkbox" id="Python">
    <label for="Python">Python</label>

    <div class="result">已选：</div>
</form>

```

### attr 属性内容生成

```
<!--css-->
.web:after {
    content: "（"attr(href)"）"
}

<!--html-->
<a class="web" href="https://echeverra.cn">echevera</a>

```

content 值也可以是 attr()方法，用来获取指定属性的值，可插入到指定的位置。

### 文字引号

```
<!--css-->
span {
    quotes: '“' '”';
}
span:before {
    content: open-quote;
}
span:after {
    content: close-quote;
}

<!--html-->
<p>鲁迅说过：<span>真正的勇士,敢于直面惨淡的人生,敢于正视淋漓的鲜血。</span></p>

```
