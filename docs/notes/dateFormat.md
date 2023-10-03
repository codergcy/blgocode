# DateFormat

## 手机号脱敏操作

```javascript
function formatPhoneByStar(str) {
  return String(str).replace(/(\d{3})(\d+)(\d{4})/g, '$1****$3');
}
```

## 邮箱脱敏

```js
function formatEmailByStar(str) {
  if (String(str).indexOf('@') > 0) {
    return String(str).replace(/(\w{1,3})(.+)(@.+)/g, '$1****$3');
  }
}
```

## 保留两位小数

```js
numFilter (value) {
// 截取当前数据到小数点后两位，其他位数同理
let realVal = parseFloat(value).toFixed(2)
return realVal
}
```

## 数字格式化，保留两位小数并增加千位分隔符

```js
function number(data) {
  if (data != null) {
    return data.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  } else {
    return;
  }
}
```

## 日期格式化

### 日期+时间

```js
function formatDate1(time) {
  var date = new Date(time);

  var year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  var newTime = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  return newTime;
}

alert(formatDate1(new Date().getTime())); //2019-2-21 10:37:19
```

### 日期补 0

```js
function formatDate2(time) {
  var date = new Date(time);

  var year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  var newTime =
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (day < 10 ? '0' + day : day) +
    ' ' +
    (hour < 10 ? '0' + hour : hour) +
    ':' +
    (min < 10 ? '0' + min : min) +
    ':' +
    (sec < 10 ? '0' + sec : sec);

  return newTime;
}

alert(formatDate2(new Date().getTime())); //2019-02-21 10:39:33
```

### 自定义日期格式

```js
function formatDate(time, format = 'YY-MM-DD hh:mm:ss') {
  var date = new Date(time);

  var year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
    return '0' + index;
  }); //开个长度为10的数组 格式为 ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"]

  var newTime = format
    .replace(/YY/g, year)
    .replace(/MM/g, preArr[month] || month)
    .replace(/DD/g, preArr[day] || day)
    .replace(/hh/g, preArr[hour] || hour)
    .replace(/mm/g, preArr[min] || min)
    .replace(/ss/g, preArr[sec] || sec);

  return newTime;
}

alert(formatDate(new Date().getTime())); //2019-02-21 10:45:54
alert(formatDate(new Date().getTime(), 'YY年MM月DD日')); //2019年02月21日
alert(formatDate(new Date().getTime(), '今天是YY/MM/DD hh:mm:ss')); //今天是2019/02/21 10:49:29
```

## 获取指定区间范围随机数

```js
function randomFrom(lowerValue, upperValue) {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
//如获取1-100之间的随机数
console.log(randomFrom(1, 100));
```

## 数组排序

```typescript
// 利用ES6的sort
let Arr = [56, 21, 88, 10, 5, 77];
Arr.sort((a, b) => a - b); //箭头函数不加大括号指向这个函数的返回值，可以不写return关键字
console.log(Arr); //[5, 10, 21, 56, 77, 88]
```

## 数组去重

```typescript
// 利用ES6的set
// Set数据结构，它类似于数组，其成员的值都是唯一的。
// 利用Array.from将Set结构转换成数组
function dedupe(array) {
  return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]); //[1,2,3]
```
