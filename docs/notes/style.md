# Style

## 自定义下边框长度

`border-bottom`默认是实际宽度的 100%，在实际开发中，很多设计样式并不需要长度 100%，在`CSS3`中就可以利用伪类进行修改：

```css
/** 使用伪类添加边框 **/
.border-class::after {
  content: '';
  width: 100%;
  height: 1px;
  display: block;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}
```

## div 划入效果

利用`input`中`checkbox`的 `check` 属性，可以在`css`中直接判断是否显示`div`。该效果通常用于移动端菜单栏的样式。

```html
<!-- Checkbox to toggle the menu -->
<input type="checkbox" id="checkMenu" hidden />
<!-- Label for #tm checkbox -->
<label for="checkMenu" hidden>Click Me</label>
<div class="menu-wp"></div>
```

`css`样式如下

```css
.menu-wp {
  padding: 4%;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100vw;
  right: 0;
  background-color: #fff;
  transition: all 0.7s;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  -ms-transition: all 0.7s;
  -o-transition: all 0.7s;
}

/* !重要 */
#checkMenu:checked ~ .menu-wp {
  transform: translateX(-100vw);
  -webkit-transform: translateX(-100vw);
  -moz-transform: translateX(-100vw);
  -ms-transform: translateX(-100vw);
  -o-transform: translateX(-100vw);
}
```
