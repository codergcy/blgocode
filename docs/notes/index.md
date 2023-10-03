# Function

## 更换对象数组中的 key 值

```js
/**
 * @description: 更换对象数组key值
 * @param {*} arr 需要替换的数组
 * @param {*} key 替换后的key值 eg:['value', 'label']
 * @return {*}
 * @author: ECLAIR
 */
 convertKey(arr, key) {
  let newArr = [];
  arr.forEach((item) => {
    let newObj = {};
    for (var i = 0; i < key.length; i++) {
      newObj[key[i]] = item[Object.keys(item)[i]];
    }
    newArr.push(newObj);
  });
  return newArr;
}
```

## 截取地址栏中的参数

```js
/**
 * @description: 截取地址栏中的参数
 * @param {*} name 需要截取的参数
 * @return {*}
 * @author: ECLAIR
 */
getQueryString(name) {
  let u = arguments[1] || window.location.href,
        reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
        r = u.substr(u.indexOf('?') + 1).match(reg);
      return r != null ? decodeURI(r[2]) : '';
}
```

## 判断是否为移动端

```js
/**
 * @description: 判断是否为移动端
 * @return {*} TRUE为移动端，FALSE为PC端
 * @author: ECLAIR
 */
_isMobile() {
  let flag =
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
      navigator.userAgent
    );
  return flag;
}
```

## 去掉 HTML 标签

```js
/**
 * @description: 去掉 html 标签
 * @return {*}
 * @author: ECLAIR
 */
removeHtmlTab(tab) {
  return tab.replace(/<[^<>]+?>/g, ''); //删除所有HTML标签
}
```

## 普通字符转换成转义符

```js
/**
 * @description: 普通字符转换成转义符
 * @return {*}
 * @author: ECLAIR
 */
html2Escape(sHtml) {
  return sHtml.replace(/[<>&"]/g, function (c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
  });
}
```

## 空格转义

```js
/**
 * @description: 空格转义
 * @return {*}
 * @author: ECLAIR
 */
nbsp2Space(str) {
  var arrEntities = { nbsp: ' ' };
  return str.replace(/&(nbsp);/gi, function (all, t) {
    return arrEntities[t];
  });
}
```

## 换行转义

```js
/**
 * @description: 换行转义
 * @return {*}
 * @author: ECLAIR
 */
return2Br(str) {
  return str.replace(/\r?\n/g, '<br />');
}
```

## 去除开头结尾换行，并将连续 3 次以上的换行改为 2 次

```js
/**
 * @description: 去除开头结尾换行，并将连续3次以上的换行改为2次
 * @return {*}
 * @author: ECLAIR
 */
trimBr(str) {
  str = str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, '\r\n\r\n'); //限制最多2次换行
  str = str.replace(/^((\s|&nbsp;)*\r?\n)+/g, ''); //清除开头换行
  str = str.replace(/((\s|&nbsp;)*\r?\n)+$/g, ''); //清除结尾换行
  return str;
}
```

## 将连续多个空格合并为一个空格

```js
/**
 * @description: 将连续多个空格合并为一个空格
 * @return {*}
 * @author: ECLAIR
 */
mergeSpace(str) {
  str = str.replace(/(\s|&nbsp;)+/g, ' ');
  return str;
}
```
